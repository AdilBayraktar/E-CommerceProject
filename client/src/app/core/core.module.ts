import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { PublicFooterComponent } from './public-footer/public-footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavBarComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    HeaderComponent,
    PublicFooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  exports: [
    NavBarComponent,
    HeaderComponent,
    PublicFooterComponent
  ],
})
export class CoreModule { }
