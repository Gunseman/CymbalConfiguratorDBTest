/**
 * Created by gunseman on 08.07.17.
 */
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ai-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges{

  @Input() public rating: number = 0;
  public rateWidth: number;

  ngOnChanges(): void {
    this.rateWidth = Math.round(this.rating * 146/5);
  }

}
