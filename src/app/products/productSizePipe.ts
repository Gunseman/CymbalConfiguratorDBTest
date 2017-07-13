/**
 * Created by gunseman on 09.07.17.
 */
import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "./product";

@Pipe({
  name: 'productSizeFilter'
})
export class ProductSizeFilterPipe implements PipeTransform{
  transform(value: number): string {
      let str = ""+value;
      return str += "''";
  }
}
