import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private product: ProductService, private sharService: SharedService) { }

  productList: any = [];
  allProductList: any = [];
  cartList : any = [];
  searchText: string = '';

  ngOnInit(): void {
    this.product.getProducts().subscribe(
      (data) => {
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

  listProduct(products: any) {
    this.allProductList = products;
  }

  addtocart(product: any) {
    let existProduct = null;
    if(this.cartList.length) {
      existProduct = this.cartList.filter((cartItem: { ProductName: any; }) => cartItem.ProductName === product.ProductName);
      console.log(existProduct);
    }
    if(existProduct && existProduct.length) {
      alert("Product Already added to the cart");
      return;
    } else {
      let updateProduct = {...product,Quantity:1}
      this.cartList.push(updateProduct)
      this.sharService.insertProduct(this.cartList);
    }    
  }

  searchProduct() {
    if(this.searchText) {
      this.allProductList = this.allProductList.filter((pro: any) => (pro.ProductName.toLowerCase()).includes(this.searchText))
    }
  }
}
