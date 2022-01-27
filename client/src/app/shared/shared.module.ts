import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginationHeaderComponent } from './components/pagination-header/pagination-header.component'
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { OrderTotalComponent } from './components/order-total/order-total.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TextInputComponent } from './components/text-input/text-input.component';



@NgModule({
  declarations: [
    PaginationHeaderComponent,
    OrderTotalComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    BsDropdownModule
  ],
  exports: [PaginationModule,CarouselModule, OrderTotalComponent, ReactiveFormsModule, BsDropdownModule, TextInputComponent]
})
export class SharedModule { }
