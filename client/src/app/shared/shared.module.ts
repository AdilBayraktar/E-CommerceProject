import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component'
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginationHeaderComponent,
    OrderTotalComponent,
    TextInputComponent,
    StepperComponent,
    BasketSummaryComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule,
    CdkStepperModule,
    RouterModule
  ],
  exports: [PaginationModule,CarouselModule, OrderTotalComponent, ReactiveFormsModule, BsDropdownModule, TextInputComponent, StepperComponent, CdkStepperModule, BasketSummaryComponent],
})
export class SharedModule { }
