// module imports
import {NgModule}          from '@angular/core';
import {BrowserModule}     from '@angular/platform-browser';
import {FormsModule}       from '@angular/forms';
import {HttpModule}        from '@angular/http';
import {AUTH_PROVIDERS }      from 'angular2-jwt';
import {routing, appRoutingProviders} from './app.routing';

import {AuthGuard} from './guards/index';


// component imports
import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';

import {AuditLogComponent} from './auditlogs/auditlogs.component';
import {FileSentinelSplashComponent} from './splash/filesentinel_splash.component';

import {PartnerComponent} from  './partners/partner.component';
import {PartnerDetailComponent} from  './partner-detail/partner.detail.component';

import {PartnerRegistrationComponent} from  './partner-registration/partner.registration.component';
import {ClientRegistrationComponent} from './client-registration/client.registration.component';

import {RegistrationComponent} from './registration/registration.component';
import {RegistrationsListComponent} from './registration/registrations.list.component';
import {RegistrationDetailComponent} from './registration/registrationdetail.component';


import {ScheduleTransferComponent} from './schedule/schedule.transfer.component';

import {MapsComponent} from './maps/maps.component';
import {ChartsComponent} from './charts/charts.component';
import {FileMapComponent} from './filemap/filemap.component';
import {NotFoundComponent} from './not-found.component';
import {LoginComponent} from './login/index';


// service imports
import {RegistrationService} from './registration/registration.service';
import {ClientRegistrationService} from './client-registration/client.registration.service';
import {PartnerServices} from  './partners/partner.services';
import {PartnerDetailServices} from './partner-detail/partner.detail.services';
import {FileMapService} from './filemap/filemap.service';
import {AuditLogsService} from './auditlogs/auditlogs.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuditLogComponent,
        FileSentinelSplashComponent,
        LoginComponent,
        PartnerComponent,
        PartnerDetailComponent,
        RegistrationComponent,
        RegistrationDetailComponent,
        RegistrationsListComponent,
        PartnerRegistrationComponent,
        ClientRegistrationComponent,
        ScheduleTransferComponent,
        MapsComponent,
        ChartsComponent,
        FileMapComponent,
        NotFoundComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS,
        RegistrationService,
        PartnerServices,
        PartnerDetailServices,
        ClientRegistrationService,
        FileMapService,
        AuditLogsService,
        AuthGuard
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
