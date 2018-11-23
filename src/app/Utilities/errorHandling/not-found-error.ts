import { AppError } from './app-error';

export class NotFoundError extends AppError
{
    constructor()
    {
        super(null);
        console.log('Service Not Found');
    }
}