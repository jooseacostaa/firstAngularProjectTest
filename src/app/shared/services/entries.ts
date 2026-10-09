import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Entries {

    private httpClient = inject(HttpClient);

    public retrieveEntries(): Observable<any> {
        return this.httpClient.get<any>(
            'https://jsonplaceholder.typicode.com/posts'
        );
    }
}