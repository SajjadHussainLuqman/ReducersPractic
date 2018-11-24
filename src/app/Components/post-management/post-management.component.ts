import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import * as CRUD from '../../StoreData/Actions/post.actions';
import { IAppState } from '../../StoreData/Reducers/index';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styles: []
})
export class PostManagementComponent implements OnInit {

  title = 'Posts Management';

  cart: Observable<Array<any>>
  
  constructor(private _store:Store<IAppState>){
    this.cart= this._store.select('AllPost');
  }

  ngOnInit()
  {
  }

  AddStudent()
  {
    this._store.dispatch(new CRUD.AddActionClass({
      Id: 2,
      Name: 'Majid',
      Address: 'Lahore'
    }));
  }

  UpdateStudentList()
  {
    this._store.dispatch(new CRUD.UpdateActionClass({
      Id: 2,
      Name: 'Majid Khalil',
      Address: 'new Lahore'
    }));
  }

  AddStudentList()
  {
    this._store.dispatch(new CRUD.AddListActionClass(
      [{
      Id: 4,
      Name: 'Rizwan',
      Address: 'Kot Samaba'
    },
    {
      Id: 5,
      Name: 'Mazhar',
      Address: 'Karachi'
    }]
    ));
  }

  RemoveStudent()
  {
    this._store.dispatch(new CRUD.DeleteActionClass({Id:2}));
  }

  ResetStudent()
  {
    this._store.dispatch(new CRUD.ResetActionClass());
  }
}
