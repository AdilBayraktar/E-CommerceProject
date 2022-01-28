import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/IBasket'
import { IProduct } from '../shared/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrl = environment.apiUrl
  private basketSource = new BehaviorSubject<IBasket>(null)
  basket$ = this.basketSource.asObservable();
  private basketTotal = new BehaviorSubject<IBasketTotals>(null)
  basketTotal$ = this.basketTotal.asObservable()

  constructor(private http: HttpClient) { }

  getBasket(id: string){
    return this.http.get(this.apiUrl + 'basket?id=' + id)
    .pipe(
      map((basket: IBasket) =>{
        this.basketSource.next(basket)
        this.calculateItemsTotal()
      })
    )
  }

  setBasket(basket: IBasket){
    return this.http.post(this.apiUrl + 'basket' , basket).subscribe((res: IBasket) =>{
      this.basketSource.next(res)
      this.calculateItemsTotal()
    },error=>{
      console.log(error)
    })
  }

  getCurrentBasketValue(){
    return this.basketSource.value
  }

  addItemToBasket(item: IProduct, quantity = 1){
    const productToAdd: IBasketItem = this.mapProductItemToBasket(item, quantity)
    const basket = this.getCurrentBasketValue()?? this.createBasket();
    basket.items = this.addOrUpdateItem(basket.items, productToAdd, quantity)
    this.setBasket(basket)
  }

  createBasket(): IBasket {
    const basket = new Basket()
    localStorage.setItem('basket_id', basket.id)
    return basket
  }

  private addOrUpdateItem(items: IBasketItem[], itemToAdd: IBasketItem, quantity: number): IBasketItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  mapProductItemToBasket(item: any, quantity: number): IBasketItem {
    return{
      id: item.id,
      productName: item.name,
      price: item.price,
      category: item.productcategory,
      type: item.productType,
      pictureUrl: item.pictureUrl,
      quantity: quantity,
    }
  }

  calculateItemsTotal(){
    const basket = this.getCurrentBasketValue()
    const shipping = 0
    const subtotal = basket.items.reduce((a,b) => (b.price * b.quantity) + a , 0)
    const total = subtotal + shipping
    this.basketTotal.next({shipping, total, subtotal})
  }

  incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    basket.items[foundItemIndex].quantity++;
    this.setBasket(basket);
  }


  decrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    const foundItemIndex = basket.items.findIndex(x => x.id === item.id);
    if (basket.items[foundItemIndex].quantity > 1) {
      basket.items[foundItemIndex].quantity--;
      this.setBasket(basket);
    } else {
      this.removeItemFromBasket(item);
    }
  }

  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter(x => x.id !== item.id)
      if (basket.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }

  deleteBasket(basket: IBasket) {
    return this.http.delete(this.apiUrl + 'basket?id=' + basket.id).subscribe (() => {
      this.basketSource.next(null);
      this.basketTotal.next(null);
      localStorage.removeItem('basket_id');
    }, error => {
      console.log(error);
    });
  }

  deleteLocalBasket(id: string) {
    this.basketSource.next(null);
    this.basketTotal.next(null);
    localStorage.removeItem('basket_id');
  }
}
