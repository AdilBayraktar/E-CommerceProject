import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';
import { IUser } from '../shared/models/IIser';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup
  user: IUser
  constructor( private fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.createCheckoutForm()
    this.getAddressForm()
  }

  createCheckoutForm() {
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        country: [null, Validators.required],
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: ['MNG Kargo', Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required]
      })
    });
  }

  getAddressForm() {
    this.accountService.getUserAddress().subscribe(address => {
      if (address) {
        this.checkoutForm.get('addressForm').patchValue(address);
      }
    }, error => console.log(error));
  }

}
