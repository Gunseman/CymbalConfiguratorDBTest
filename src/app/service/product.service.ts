/**
 * Created by gunseman on 08.07.17.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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
  //private headers = new Headers({'Content-Type': 'application/json'});
  private _productUrl = 'assets/products.json';

  public products: IProduct[];
  constructor(private _http: Http){ }


/*  getProducts() {
    this._http.get(this._productUrl).toPromise()
      .then(function (response) {
        let x = response.json().map();
        console.log("Products 1 Promise: "+JSON.stringify(x as IProduct[]));
      this.products = x as IProduct[];
        console.log("Products 2 Promise: "+this.products);
      })
      .catch(this.handleError);
    //return this._http.get(this._productUrl).map(this.response: Response => { <IProduct[]>response.json()});
  }*/

  getProducts(): Promise<IProduct[]> {
    return this._http.get(this._productUrl)
      .toPromise()
      .then( response => response.json() as IProduct[]).catch(this.handleError);
        //console.log("Products 1 Promise: "+JSON.stringify(x as IProduct[]));
        //this.products = x as IProduct[];
        //console.log("Products 2 Promise: "+this.products);
      //.catch(this.handleError);

    /*.map(function (response: Response) {
     console.log("Products 1 Promise: "+JSON.stringify(response.json()));
     //response.json()
     })
     .do(data => console.log("All: " + JSON.stringify(data)))
     .catch(this.handleError)
     */
  }

/*  private handleError(error: Response) {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.json() || 'Server error');
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

/*  getProducts():IProduct[] {
    return [
      {
        'productId': 257,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Medium Ride',
        'size':18,
        'color': 'red',
        'artNum': 'CD824418',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 3.2
      },
      {
        'productId': 255,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Medium Ride',
        'size':17,
        'color': 'blue',
        'artNum': 'CD824417',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 4.4
      },
      {
        'productId': 246,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Heavy Ride',
        'size':18,
        'color': 'black',
        'artNum': 'CD822618',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 2.9
      },
      {
        'productId': 259,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Medium Ride',
        'size':18,
        'color': 'red',
        'artNum': 'CD824418',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 3.2
      },
      {
        'productId': 223,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Medium Ride',
        'size':17,
        'color': 'blue',
        'artNum': 'CD824417',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 4.8
      },
      {
        'productId': 224,
        'familyId': 3,
        'familyName': 'Color Cymbal 900',
        'name': 'Heavy Ride',
        'size':18,
        'color': 'black',
        'artNum': 'CD822618',
        'description': '',
        'imgUrl': 'http://www.gunseman.com/sandbox/cymbal-configurator/img/cymbal.png',
        'inactive': false,
        'zIndex': 0,
        'rating': 3.9
      }];
  }*/

/*  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  */



}
