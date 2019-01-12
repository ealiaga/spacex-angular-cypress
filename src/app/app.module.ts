import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListLaunchesComponent } from './components/list-launches/list-launches.component';
import { ListLaunchesProxyService } from './providers/proxy/list-launches-proxy.service';
import { ListLaunchesService } from './providers/service/list-launches.service';

@NgModule({
    declarations: [
        AppComponent,
        ListLaunchesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ListLaunchesService,
        ListLaunchesProxyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
