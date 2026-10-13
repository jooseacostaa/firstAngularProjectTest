import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Auth {

    login(user: string, password: string): Observable<number> {
        const token = 1234;

        localStorage.setItem('personalToken', token.toString());
        localStorage.setItem('userName', user);

        return of(token);
    }
}