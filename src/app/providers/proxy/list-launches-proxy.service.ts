import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListLaunchesProxyService {

    api = `https://api.spacexdata.com/v3/launches`;

    constructor(private http: HttpClient) { }

    getLaunches(): Observable<HttpResponse<any>> {
        return this.http.get<any>(this.api, { observe: 'response' });
    }
}
