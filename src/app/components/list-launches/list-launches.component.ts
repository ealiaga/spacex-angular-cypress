import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Launch } from 'src/app/models/launch';
import { ListLaunchesService } from 'src/app/providers/service/list-launches.service';

@Component({
    selector: 'app-list-launches',
    templateUrl: './list-launches.component.html',
    styleUrls: ['./list-launches.component.css']
})
export class ListLaunchesComponent implements OnInit, OnDestroy {

    launches: Launch[];

    subs: Subscription;

    constructor(private service: ListLaunchesService) { }

    ngOnInit() {
        this.subs = this.service.getLaunches().subscribe(
            launches => this.launches = launches
        );
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

}
