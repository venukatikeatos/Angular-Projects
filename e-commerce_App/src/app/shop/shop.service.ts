import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl='http://localhost:3000/';
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get<Pagination<Product[]>>(this.baseUrl+'products');
  }
}
