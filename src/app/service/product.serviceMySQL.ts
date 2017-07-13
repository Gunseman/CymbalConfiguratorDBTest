/**
 * Created by gunseman on 08.07.17.
 */

import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod} from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { IProduct } from "../products/product";
import {connectableObservableDescriptor} from "rxjs/observable/ConnectableObservable";
//import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {
  private _headers = new Headers();
  private _productUrl = 'http://localhost/cymbal-configurator/product-service.php';

  public products: IProduct[];

  constructor(private _http: Http){
    this._headers.append('Content-Type', 'application/json; charset=utf-8');
  }

  getProducts(): Promise<IProduct[]> {
    return this._http.get(this._productUrl)
      .toPromise()
      .then( response => response.json() as IProduct[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
