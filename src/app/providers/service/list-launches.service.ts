import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from 'src/app/models/launch';
import { ListLaunchesProxyService } from '../proxy/list-launches-proxy.service';

@Injectable({
    providedIn: 'root'
})
export class ListLaunchesService {

    constructor(private proxy: ListLaunchesProxyService) { }

    getLaunches(): Observable<Launch[]> {
        return this.proxy.getLaunches().pipe(
            map(
                response => {
                    let launches: Launch[] = [];
                    const data = response.body;
                    data.forEach((d: any) => {
                        const launch: Launch = {
                            missionName: d.mission_name,
                            detail: d.details,
                            launchSuccess: d.launch_success,
                            missionPhoto: d.links.flickr_images[0],
                            launchYear: d.launch_year
                        };
                        launches = [...launches, launch];
                    });
                    return launches;
                }
            )
        );
    }
}
