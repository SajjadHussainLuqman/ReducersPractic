import { Injectable } from '@angular/core';

import { Effect , Actions  } from "@ngrx/effects";


import * as ExpertActions from '../Actions/expert.actions';
import { switchMap, map } from "rxjs/operators";

import { HttpClient } from '@angular/common/http';
import { ExpertService,SharedService,ApiEndPoints } from "../../Services/Index";

@Injectable({providedIn:'root'})
export class ExpertEffect {
    constructor(private _actions: Actions,
                private _Service : ExpertService,
                private _shared: SharedService,
                private _http: HttpClient) {
                    this._Service = new ExpertService(_http, _shared);
                }

    
    @Effect()
    avi = this._actions.ofType(ExpertActions.ExpertActionTypes.LoadListEnum)
                    .pipe(
                        switchMap(()=>{
                           return this._Service.GetWithNoAuthentication(ApiEndPoints.Experts.toString())
                            .pipe(map(data=> new ExpertActions.ExpertAddListActionClass(data)))
                        })
                        );
    
    // Important Note:  LoadListEnum and LoadedListedEnum Must Be Different Because If you use same for both Perpose.
    //  So it will generate Loop 
}