import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutProducts: any = [];

  constructor(private shareService: SharedService, private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.shareService.retrieveProduct().subscribe(
      (data) => {
        this.checkoutProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeProduct(proName: string) {
    this.checkoutProducts = this.checkoutProducts.filter((pro: { ProductName: string; }) => pro.ProductName !== proName) ;
    this.shareService.insertProduct(this.checkoutProducts);    
  }

  checkoutcart() {
    this.productService.checkout(this.checkoutProducts).subscribe(data=> {
      alert('Order Submission successful')
    },
    error=>{
      alert('Order Submission unsuccessful')
    })
    this.shareService.insertProduct([]);
    this.router.navigate(['/productlist'])
  }
}
