import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as CRUD from '../../StoreData/Actions/expert.actions';
import { IAppState } from '../../StoreData/Reducers/index';

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

  cart: Observable<Expert[]>;

  constructor(private _store: Store<IAppState>) {
    this.cart = this._store.select('Experts');
  }

  ngOnInit() {
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
    this._store.dispatch(new CRUD.ExpertListLoadActionClass());
  }

  Remove() {
    this._store.dispatch(new CRUD.ExpertDeleteActionClass({ Id: 2 }));
  }

  Reset() {
    this._store.dispatch(new CRUD.ExpertResetActionClass());
  }

  ResetAllApplicationState()
  {
    this._store.dispatch({type:"Logout"});
  }

}
