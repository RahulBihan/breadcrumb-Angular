import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any>{
    let data =  this.http.get('https://dummyjson.com/products');
    return data;
  }
}
