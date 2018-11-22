import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

import { Store,select } from '@ngrx/store';

import { AddActionClass, DeleteActionClass, ResetActionClass, AddListActionClass, UpdateActionClass } from './SimpleReducerExampleOne/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReducersPractic';

  cart: Observable<Array<any>>
  
  constructor(private _store:Store<any>){
     this._store.select('AllStudents').subscribe(x=>
      {
        this.cart =x;
      });
  }

  ngOnInit()
  {
   console.log(this.cart);
  }

  AddStudent()
  {
    this._store.dispatch(new AddActionClass({
      Id: 2,
      Name: 'Majid',
      Address: 'Lahore'
    }));
  }

  UpdateStudentList()
  {
    this._store.dispatch(new UpdateActionClass({
      Id: 2,
      Name: 'Majid Khalil',
      Address: 'new Lahore'
    }));
  }

  AddStudentList()
  {
    this._store.dispatch(new AddListActionClass(
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
    this._store.dispatch(new DeleteActionClass({Id:2}));
  }

  ResetStudent()
  {
    this._store.dispatch(new ResetActionClass());
  }

}
