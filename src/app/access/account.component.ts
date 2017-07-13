/**
 * Created by gunseman on 12.07.17.
 */
import { Component } from '@angular/core';

@Component({
  selector: '<ai-account></ai-account>',
  templateUrl: 'account.component.html'
})
export class AccountComponent {
  public showLogin: boolean = false;
  public accountName:string = "Hans Meier";

 constructor(){ }



 setShowLogin(){
  this.showLogin = !this.showLogin;
 }

}
