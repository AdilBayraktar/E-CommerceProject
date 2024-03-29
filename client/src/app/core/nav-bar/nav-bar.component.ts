import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/IBasket';
import { IUser } from 'src/app/shared/models/IIser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private basketService: BasketService, private accountService: AccountService, private router: Router) { }
  basket$: Observable<IBasket>
  currentUser$: Observable<IUser>
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$
  }

  logout(){
    this.accountService.logout()
    this.router.navigateByUrl('/home')

  }

}
