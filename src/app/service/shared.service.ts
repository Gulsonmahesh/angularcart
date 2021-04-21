import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public myData: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public data = this.myData.asObservable();

  constructor() { }

  insertProduct(data: any) {    
    this.myData.next(data);
  }

  retrieveProduct() {
    return this.myData;
  }
}
