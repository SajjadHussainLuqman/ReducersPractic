import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {

    constructor()
    {
        super();
    }

    handleError(error: any) 
    {
        alert('Something bad happened; please try again later.');
        console.log(error);
    }
}