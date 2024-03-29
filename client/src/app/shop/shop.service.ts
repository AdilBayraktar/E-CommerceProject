import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICategory } from '../shared/models/ICategory';
import { IPagination } from '../shared/models/IPagination';
import { IProduct } from '../shared/models/IProduct';
import { ShopParams } from '../shared/models/ShopParams';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  apiUrl = 'https://localhost:5001/api/';
  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();
    if(shopParams.categoryId !== 0){
      params = params.append('categoryId', shopParams.categoryId.toString());
    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search)
    }
    params = params.append('sort', shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber.toString())
    params = params.append('pageIndex', shopParams.pageSize.toString())


    return this.http
      .get<IPagination>(this.apiUrl + 'products', {
        observe: 'response',
        params
      })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  getProduct(id: number){
    return this.http.get<IProduct>(this.apiUrl + 'products/' + id)
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.apiUrl + 'products/categories');
  }
}
