import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/IProduct';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  constructor(
    private service: ShopService,
    private activatedRoute: ActivatedRoute,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.service
      .getProduct(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (res) => {
          this.product = res;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  addBasketItem(){
    this.basketService.addItemToBasket(this.product, this.quantity)
  }

  incrementItemQuantity(){
    this.quantity++
  }

  decrementItemQuantity(){
    if (this.quantity > 1) {
      this.quantity--
    }
  }
}
