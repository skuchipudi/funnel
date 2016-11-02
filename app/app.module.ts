// module imports
import {NgModule}          from '@angular/core';
import {BrowserModule}     from '@angular/platform-browser';
import {FormsModule}       from '@angular/forms';
import {HttpModule}        from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { routing, appRoutingProviders} from './app.routing';

// component imports

import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';

import {AuditLogComponent} from './audit/auditlog.component';
import {AuditDetailComponent} from './audit/auditdetail.component';
import {FileSentinelSplashComponent} from './splash/filesentinel_splash.component';

import {RegistrationComponent} from './registration/registration.component';
import {RegistrationsListComponent} from './registration/registrations.list.component';
import {RegistrationDetailComponent} from './registration/registrationdetail.component';

import {ScheduleTransferComponent} from './schedule/schedule.transfer.component';

import {MapsComponent} from './maps/maps.component';
import {ChartsComponent} from './charts/charts.component';
import {FileMapComponent} from './filemap/filemap.component';
import {NotFoundComponent} from './not-found.component';

// service imports
import {AuditLoggerService} from './audit/auditlogger.service';
import {RegistrationService} from './registration/registration.service';
import {FileMapService} from './filemap/filemap.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuditLogComponent,
        AuditDetailComponent,
        FileSentinelSplashComponent,
        RegistrationComponent,
        RegistrationDetailComponent,
        RegistrationsListComponent,
        ScheduleTransferComponent,
        MapsComponent,
        ChartsComponent,
        FileMapComponent,
        NotFoundComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS,
        AuditLoggerService,
        RegistrationService,
        FileMapService
    ],
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        // All your routers are in app.routing.ts
        routing
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
