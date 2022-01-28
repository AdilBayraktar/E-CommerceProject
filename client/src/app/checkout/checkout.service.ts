import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from '../shared/models/IDeliveryMethod';
import { IOrderToCreate } from '../shared/models/IOrder';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getDeliveryMethods() {
    return this.http.get(this.apiUrl + 'orders/deliveryMethods').pipe(
      map((dm: IDeliveryMethod[]) => {
        return dm.sort((a, b) => b.price - a.price);
      })
    );
  }

  createOrder(order: IOrderToCreate) {
    return this.http.post(this.apiUrl + 'orders', order);
  }
}
