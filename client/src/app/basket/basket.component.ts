import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../shared/models/IBasket';
import { IProduct } from '../shared/models/IProduct';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() product: IProduct
  constructor(private basketService: BasketService) { }
  basket$: Observable<IBasket>
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$
  }

  removeBasketItem(item: IBasketItem){
    this.basketService.removeItemFromBasket(item)
  }

  incrementItemQuantity(item: IBasketItem){
    this.basketService.incrementItemQuantity(item)
  }

  decrementItemQuantity(item: IBasketItem){
    this.basketService.decrementItemQuantity(item)
  }

}
