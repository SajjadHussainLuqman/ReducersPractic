import { HttpClient,HttpErrorResponse, HttpHeaders, HttpEventType  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './Shared.service';
import { BaseService } from './Base.service';
import { catchError, map } from 'rxjs/operators'
import { ApiEndPoints } from './ApiEndPoints';

@Injectable({ providedIn: 'root'})
export class ExpertService extends BaseService
{
    constructor(_http:HttpClient, _shared:SharedService){
        super(_http,_shared);
    }
    
    CanAddChildFunctionAs() 
    {
        this.API_ENDPOINT = ApiEndPoints.Experts.toString();
        this.SetFullUrl();

        return this._http.get(this.FullUrl.toString())
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString()))
                             );
    }

    CanAddChildFunctionAsUseParent() 
    {
        this.API_ENDPOINT = ApiEndPoints.Experts.toString();
        this.SetFullUrl();

        return this.Get(this.FullUrl.toString())
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString()))
                             );
    }
}