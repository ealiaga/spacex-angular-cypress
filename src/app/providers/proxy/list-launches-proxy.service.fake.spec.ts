import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LIST_LAUNCHES_FAKE } from './list-launches-fake.spec';

@Injectable({
    providedIn: 'root'
})
export class ListLaunchesProxyServiceFake {

    constructor() { }

    getLaunches(): Observable<HttpResponse<any>> {
        const httpResponse = new HttpResponse<any>({
            body: LIST_LAUNCHES_FAKE
        });
        return of(httpResponse);
    }
}
