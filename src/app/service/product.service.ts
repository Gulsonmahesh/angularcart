import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('/products').pipe();
  }

  checkout(cartItems:any): Observable<any> {
    return this.http.post('/checkout', JSON.stringify(cartItems)).pipe();
  }
}
