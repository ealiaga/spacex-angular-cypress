import { inject, TestBed } from '@angular/core/testing';
import { ListLaunchesProxyService } from '../proxy/list-launches-proxy.service';
import { ListLaunchesProxyServiceFake } from '../proxy/list-launches-proxy.service.fake.spec';
import { ListLaunchesService } from './list-launches.service';

describe('ListLaunchesService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            ListLaunchesService,
            { provide: ListLaunchesProxyService, useClass: ListLaunchesProxyServiceFake }
        ]
    }));

    it('should be created', inject([ListLaunchesService],
        (service: ListLaunchesService) => {
            expect(service).toBeTruthy();
    }));

    it('should get Launches', () => {
        const service: ListLaunchesService = TestBed.get(ListLaunchesService);
        service.getLaunches().subscribe(
            users => {
                expect(users[0].missionName).toBeDefined();
                expect(users[0].detail).toBeDefined();
                expect(users[0].launchYear).toBeDefined();
                expect(users[0].missionPhoto).toBeDefined();
            }
        );
    });
});
