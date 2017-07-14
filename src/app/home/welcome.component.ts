/**
 * Created by gunseman on 12.07.17.
 */
import { Component } from '@angular/core';

@Component({
  selector: '<page-home></page-home>',
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent {
  public titel:string = "Willkommen";

  openConfigurator(){

  }
}
