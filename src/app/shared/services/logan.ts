import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
    providedIn: 'root'
})
export class Logan {

    public logan(user: User): Observable<number> {
        const id = Math.floor(Math.random() * 1000);
        return of(id);
    }
}