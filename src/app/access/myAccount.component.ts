/**
 * Created by gunseman on 14.07.17.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '<ai-myaccount></ai-myaccount>',
  templateUrl: 'myAccount.component.html'
})
export class MyAccountComponent implements OnInit {
  public title:string = "My Account";

  constructor(private _userId: ActivatedRoute,
              private _router: Router){
  }

  ngOnInit(): void {
    let id = +this._userId.snapshot.params['id'];
    this.title += `: ${id}`;
  }

  getUserId(): ActivatedRoute{
    return this._userId;
  }

  onBack(): void {
    this._router.navigate(['/login']);
  }
}
