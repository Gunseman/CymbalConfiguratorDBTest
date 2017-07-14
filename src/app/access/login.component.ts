/**
 * Created by gunseman on 12.07.17.
 */
import{ Component } from '@angular/core';

@Component ({
  selector: '<ai-login></ai-login>',
  templateUrl: 'login.component.html'
})

export class LoginComponent {


  public newAccount: boolean = false;
  private _userId:number;

  constructor() {
    this._userId = 3;
  }
  setNewAccount(){
    this.newAccount = !this.newAccount;
  }

  getUserId(): number {
    return this._userId;
  }

}
