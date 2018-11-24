import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import * as CRUD from '../../StoreData/Actions/expert.actions';

import { ExpertService } from "../../Services/Expert.service";
import { SharedService } from "../../Services/Shared.service";
import { ApiEndPoints } from 'src/app/Services/ApiEndPoints';
import { Expert } from '../../Models/index';

@Component({
  selector: 'app-expert-management',
  templateUrl: './expert-management.component.html',
  styles: []
})
export class ExpertManagementComponent implements OnInit {

  title = 'Experts Management';
  _HoldServiceRef: Subscription;
  _StoreListLength : number;

  cart: Observable<Expert[]>

  constructor(private _store: Store<any>,
    private _Service: ExpertService,
    private _shared: SharedService,
    private _router: Router,
    private _http: HttpClient) {

    this._store.select('Experts').subscribe(x => {
      this.cart = x;
      this._StoreListLength = x.length;
    });

    this._Service = new ExpertService(_http, _shared);
  }

  ngOnInit() {
    if (this.cart == null || this.cart == undefined ||  this._StoreListLength == 0) {

     	this._Service.GetWithNoAuthentication(ApiEndPoints.Experts.toString())
                              .subscribe( (x) => {
                                  this._store.dispatch(new CRUD.ExpertAddListActionClass(x));
                                },
                                error => { 
                                  console.log( error ); 
                                });
    }
  }

  ngOnDestroy() {
  }

  Add() {
    this._store.dispatch(new CRUD.ExpertAddActionClass({
      Id: 2,
      Name: 'Majid',
      Address: 'Lahore'
    }));
  }

  UpdateList() {
    this._store.dispatch(new CRUD.ExpertUpdateActionClass({
      Id: 2,
      Name: 'Majid Khalil',
      Address: 'new Lahore',
      Age: 30
    }));
  }

  AddList() {
    this._store.dispatch(new CRUD.ExpertAddListActionClass(
      [{
        Id: 4,
        Name: 'Rizwan',
        Address: 'Kot Samaba',
        Age: 25
      },
      {
        Id: 5,
        Name: 'Mazhar',
        Address: 'Karachi',
        Age: 32
      }]
    ));
  }

  Remove() {
    this._store.dispatch(new CRUD.ExpertDeleteActionClass({ Id: 2 }));
  }

  Reset() {
    this._store.dispatch(new CRUD.ExpertResetActionClass());
  }

}
