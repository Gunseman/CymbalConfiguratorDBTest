/**
 * Created by gunseman on 08.07.17.
 */
import { Component, OnInit} from '@angular/core';

import { IProduct } from './product';
import { ProductToolboxComponent } from './productToolbox.component';
import {isUndefined} from "util";
import {ProductService} from "../service/product.serviceMySQL";

@Component({
  selector:'<app-productlist></app-productlist>',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class ProductListComponent implements OnInit{

  public pageTitle: string = 'Product List';
  public showLabel: boolean = true;
  public showToolbox:boolean = false;
  public products: IProduct[];
  public selectedProduct: IProduct;
  //public productTools: ProductToolboxComponent;


  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .then(products => this.products = products)
      .catch(this.handleError);
  }

  showTools(product: IProduct): void{
    if(this.selectedProduct === product || this.showToolbox === false) {
      this.showToolbox = !this.showToolbox;
    }
    this.selectedProduct = product;
    console.log("Product ID: "+this.selectedProduct.productId);
    //this.productTools.setProductId(this.selectedID);
  }

  getProductId(){
    return this.selectedProduct.productId;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
