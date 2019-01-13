import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLaunchesProxyService } from 'src/app/providers/proxy/list-launches-proxy.service';
import { ListLaunchesProxyServiceFake } from 'src/app/providers/proxy/list-launches-proxy.service.fake.spec';
import { ListLaunchesService } from 'src/app/providers/service/list-launches.service';
import { ListLaunchesComponent } from './list-launches.component';


describe('ListLaunchesComponent', () => {
    let component: ListLaunchesComponent;
    let fixture: ComponentFixture<ListLaunchesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListLaunchesComponent],
            providers: [
                ListLaunchesService,
                { provide: ListLaunchesProxyService, useClass: ListLaunchesProxyServiceFake}
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListLaunchesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    afterEach(() => {
        component.ngOnDestroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set launches', () => {
        component.ngOnInit();
        expect(component.launches);
        expect(component.launches[0]).toBeDefined();
        expect(component.launches[0].missionName).toBeDefined();
    });
});
