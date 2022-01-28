import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/IBasket';
import { IOrder } from 'src/app/shared/models/IOrder';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup
  addressInfo: any

  constructor(private toastr: ToastrService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAddressForm()
  }

  submitOrder(){
    // const basket = this.basketService.getCurrentBasketValue()
    // const orderToCreate = this.getOrderToCreate(basket)
    // this.checkoutService.createOrder(orderToCreate).subscribe( (order: IOrder) => {
      this.toastr.success ( 'Order created successfully');
    //   this.basketService.deleteLocalBasket (basket.id);
    //    console. log(order);
    //  }, error => {
    //    this.toastr.error(error.message);
    //    console. log(error);
    //  });
  }

  // private getOrderToCreate(basket: IBasket){
  //   return{
  //     basketId: basket.id,
  //     shipToAddress: this.checkoutForm.get('addressForm').value,
  //     deliveryMethodId: this.checkoutForm.get('deliveryForm').get('deliveryMethod').value
  //   }
  // }

  getAddressForm() {
    this.accountService.getUserAddress().subscribe(address => {
      if (address) {
        this.addressInfo = address;
        console.log(this.addressInfo)
      }
    }, error => console.log(error));
  }


}
