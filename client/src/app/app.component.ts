import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from './shared/models/IPagination';
import { IProduct } from './shared/models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ECommerce';

  constructor() {}

  ngOnInit(): void {
    // this.http
    //   .get('https://localhost:5001/api/products?pageSize=50')
    //   .subscribe((res: IPagination) => {
    //     this.products = res.data
    //   },error=>{
    //     console.log(error)
    //   });
  }
}