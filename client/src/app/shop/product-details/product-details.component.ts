import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct

  constructor(private service: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.service.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res=>{
      this.product = res
    },error=>{
      console.log(error)
    })
  }

}
