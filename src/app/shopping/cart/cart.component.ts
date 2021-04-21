import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private shareService: SharedService, private route: Router) { }
  cartList:any = [];

  ngOnInit(): void {
    this.shareService.retrieveProduct().subscribe(data => {
      this.cartList = data;
      console.log(this.cartList);
    });
  }

  checkout() {
    this.route.navigate(['/checkout'])
  }

}
