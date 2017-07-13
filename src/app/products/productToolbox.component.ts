/**
 * Created by gunseman on 09.07.17.
 */

import { Component, Input } from '@angular/core';

@Component({
  selector:'<product-toolbox></product-toolbox>',
  templateUrl: './productToolbox.component.html',
  styleUrls: ['./productToolbox.component.css']
})
export class ProductToolboxComponent {
  @Input() public productId: number = 0;
}
