import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private product: ProductService) { }
  productList: any = [];
  allProductList: any = [];
  ngOnInit(): void {
    this.product.getProducts().subscribe(
      (data) => {
        console.log(data)
        this.productList = data.Categories;
        // this.productList.forEach((category: any) => {
        //   category.SubCategory.forEach((subca: any) => {
        //     subca.Products.forEach((element: any) => {
        //       this.allProductList.push(element)
        //     });
        //   });
        // });
      },
      (error) => {
        console.log(error)
      }
    );
  }  

}
