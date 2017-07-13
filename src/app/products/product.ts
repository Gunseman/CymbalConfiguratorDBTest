/**
 * Created by gunseman on 08.07.17.
 */
import { Component } from '@angular/core';

export interface IProduct {
  productId:number;
  modelId: number;
  modelName: string;
  name:string;
  size:number;
  color:string;
  artNum: string;
  description: string;
  imgUrl: string;
  inactive: boolean;
  zIndex: number;
  rating: number;
}
@Component({
  template:'<h1></h1>'
})
export class Product implements IProduct{
  public productId:number;
  public modelId: number;
  public modelName: string;
  public name:string;
  public size:number;
  public color:string;
  public artNum: string;
  public description: string;
  public imgUrl: string;
  public inactive: boolean;
  public zIndex: number = 0;
  public rating: number = 0;

  constructor(){

  }

}
