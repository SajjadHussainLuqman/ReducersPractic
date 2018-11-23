import { HttpClient, HttpErrorResponse, HttpHeaders,HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators'

import { SharedService } from './Shared.service';

import { AppError } from '../Utilities/errorHandling/app-error';
import { NotFoundError } from '../Utilities/errorHandling/not-found-error';
import { BadInput } from '../Utilities/errorHandling/bad-input';

@Injectable({providedIn:'root'})
export class BaseService
{
    //readonly BaseUrl: String = 'http://localhost/api/';
    readonly BaseUrl: String = 'https://mydatabaseapi.firebaseio.com/';
    public API_ENDPOINT: String = '';
    FullUrl: String = '';

    constructor(protected _http:HttpClient,protected _shared:SharedService){
    }

    SetFullUrl()
    {   
        this.FullUrl = this.BaseUrl+''+this.API_ENDPOINT;
    }

    Get(ENDPOINT: String) 
    {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
       return this._http.get(this.FullUrl.toString(),this._shared.getRequestWithBasic())
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString()))
                             );
    }

    GetWithNoAuthentication(ENDPOINT: String) 
    {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
       return this._http.get(this.FullUrl.toString())
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString()))
                             );
    }

    GetById(ENDPOINT: String,_Id:Number)
    {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.get(this.FullUrl.toString()+'/'+_Id,this._shared.getRequestWithBasic())
                         .pipe(map(this.extractData),
                          catchError(err => this.handleError(err, this.FullUrl.toString()))
                          );
    }

    GetByIdWithNoAuthentication(ENDPOINT: String,_Id:Number)
    {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.get(this.FullUrl.toString()+'/'+_Id)
                         .pipe(map(this.extractData),
                          catchError(err => this.handleError(err, this.FullUrl.toString()))
                          );
    }
    
    GetWithParameters(params?: any): Observable<any> {
		let url = this.FullUrl.toString();
		if (params) {
			url += '?' + this._shared.urlParam(params);
		}
		return this._http
			.get(url,this._shared.getRequestWithBasic())
			.pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString()))
                             );
    }
    
    Add(ENDPOINT: String,_resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.post(this.FullUrl.toString(), _resource,this._shared.getRequestWithBasic())
                         .pipe(map(this.extractData),
                          catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    AddWithNoAuthentication(ENDPOINT: String,_resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.put(this.FullUrl.toString(), _resource)
                         .pipe(map(this.extractData),
                          catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    Update(ENDPOINT: String,_resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.put(this.FullUrl.toString(), _resource ,this._shared.getRequestWithBasic())
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    UpdateWithNoAuthentication(ENDPOINT: String,_resource: any) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.put(this.FullUrl.toString(), _resource)
                            .pipe(map(this.extractData),
                             catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    Delete(ENDPOINT: String,_Id: Number) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.delete(this.FullUrl.toString() + '/'+_Id,this._shared.getRequestWithBasic())
                        .pipe(map(this.extractData),
                         catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    DeleteWithNoAuthentication(ENDPOINT: String,_Id: Number) {
        this.API_ENDPOINT = ENDPOINT;
        this.SetFullUrl();
        return this._http.delete(this.FullUrl.toString() + '/'+_Id)
                        .pipe(map(this.extractData),
                         catchError(err => this.handleError(err, this.FullUrl.toString())));
    }

    protected extractData(res: any) 
    {
        console.log("Return From Service- see below");
        console.log(res);
        let statusCode = res.statusCode;
        let statusDescription = res.statusDescription;
        localStorage.setItem('statusCode', statusCode);
        localStorage.setItem('statusDescription', statusDescription);

        let body = res;
        return body || {};
    }
 
    handleError(error: HttpErrorResponse | any, methodName: string) 
    {
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            console.log(error);
            // A client-side or network error occurred. Handle it accordingly.
            console.log(methodName +" failed due to "+ error +" - || Client or Network Side Error");
        } else {
          // The backend returned an unsuccessful response code.
          console.log(error);
          // The response body may contain clues as to what went wrong,
            console.log(methodName +" failed due to "+ error +" - || Server Side Response Error");
        }

        if(error.status===404)
        {
            throwError(new NotFoundError());  // Not unexpected Error so no need to save in server side
        }
        if(error.status===400)
        {
            throwError(new BadInput(error.json()));  // Not unexpected Error so no need to save in server side
        }

        return throwError(new AppError(error));
    }
}