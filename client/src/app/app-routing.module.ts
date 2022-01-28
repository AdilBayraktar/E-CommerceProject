import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutSuccessComponent } from './checkout/checkout-success/checkout-success.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'test-error',
    component: TestErrorComponent
  },
  {
    path: 'server-error',
    component: ServerErrorComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'market',
    loadChildren: () => import('./shop/shop.module').then(module => module.ShopModule)
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(module => module.BasketModule)
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./checkout/checkout.module').then(module => module.CheckoutModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(module => module.AccountModule)
  },
  {
    path: 'success',
    canActivate: [AuthGuard],
    component: CheckoutSuccessComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
