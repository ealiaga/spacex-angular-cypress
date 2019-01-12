import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { ListLaunchesProxyService } from './list-launches-proxy.service';


describe('ListLaunchesProxyService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ListLaunchesProxyService]
    }));

    it('should be created', () => {
        const service: ListLaunchesProxyService = TestBed.get(ListLaunchesProxyService);
        expect(service).toBeTruthy();
    });

    it('should get launches from server', () => {
        async(() => {
            const proxy: ListLaunchesProxyService = TestBed.get(ListLaunchesProxyService);
            proxy.getLaunches().subscribe(
                response => {
                    expect(response.body).not.toBeNull();
                }
            );
        });
    });
});
