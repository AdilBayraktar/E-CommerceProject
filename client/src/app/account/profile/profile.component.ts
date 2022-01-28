import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  addressInfo: any

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAddressForm()
  }

  getAddressForm() {
    this.accountService.getUserAddress().subscribe(address => {
      if (address) {
        this.addressInfo = address;
        console.log(this.addressInfo)
      }
    }, error => console.log(error));
  }
}
