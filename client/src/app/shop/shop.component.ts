import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../shared/models/ICategory';
import { IProduct } from '../shared/models/IProduct';
import { ShopParams } from '../shared/models/ShopParams';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('search', {static: true}) searchTerm: ElementRef;
  products: IProduct[];
  categories: ICategory[];
  shopParams = new ShopParams()
  totalCount: number
  sortOptions = [
    {name: "By Name", value: "name"},
    {name: "By Price Desc", value: "priceDesc"},
    {name: "By Price Asc", value: "priceAsc"}
  ]

  constructor(private service: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getProducts(this.shopParams).subscribe(
      (response) => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex
        this.shopParams.pageSize = response.pageSize
        this.totalCount = response.count
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCategories() {
    this.service.getCategories().subscribe(
      (response) => {
        this.categories = [{ id: 0, name: 'All'}, ...response ];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onCategorySelected(categoryId: number) {
    this.shopParams.categoryId = categoryId;
    this.getProducts();
  }

  onSortingSelected(sort: string){
    this.shopParams.sort = sort
    this.getProducts()
  }

  onPageChanging(event: any){
    this.shopParams.pageNumber = event.page;
    this.getProducts()
  }

  onSearching(){
    this.shopParams.search = this.searchTerm.nativeElement.value
    this.getProducts()
  }

  onResetSearching(){
    this.searchTerm.nativeElement.value = ''
    this.shopParams = new ShopParams()
    this.getProducts()
  }
}
