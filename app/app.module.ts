/*
 *  Copyright 2019  Sunil S. Kuchipudi	
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */


// module imports
import {NgModule}          from '@angular/core';
import {BrowserModule}     from '@angular/platform-browser';
import {FormsModule}       from '@angular/forms';
import {HttpModule}        from '@angular/http';
import {AUTH_PROVIDERS }      from 'angular2-jwt';
import {routing, appRoutingProviders} from './app.routing';
import {enableProdMode} from '@angular/core';

import {AuthGuard} from './guards/index';


// component imports
import { AppComponent }        from './app.component';
import { HomeComponent }       from './home.component';

import {AuditLogComponent} from './auditlogs/auditlogs.component';
import {AlbumComponent} from './album/album.component';
import {FileSentinelSplashComponent} from './splash/filesentinel_splash.component';

import {PartnerComponent} from  './partners/partner.component';
import {PartnerDetailComponent} from  './partner-detail/partner.detail.component';

import {PartnerRegistrationComponent} from  './partner-add/partner.registration.component';
import {PartnerModifyComponent} from './partner-modify/partner.modify.component';

import {PartnerDeleteComponent} from './partner-delete/partner.delete.component';
import {PartnerDeleteConfirmedComponent} from './partner-delete/partner.delete.confirm.component';

import {ClientRegistrationComponent} from './client-registration/client.registration.component';
import {ClientModifyComponent} from './client-modify/client.modify.component';
import {ClientDeleteComponent} from './client-delete/client.delete.component';
import {ClientDeleteConfirmedComponent} from './client-delete/client.delete.confirm.component';

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
import {PartnerDeleteServices} from './partner-delete/partner.delete.services';
import {PartnerModifyServices} from './partner-modify/partner.modify.services';
import {FileMapService} from './filemap/filemap.service';
import {AuditLogsService} from './auditlogs/auditlogs.service';
import {MapsChartsService} from './charts/mapschart.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AuditLogComponent,
        FileSentinelSplashComponent,
        LoginComponent,
       
        PartnerComponent,
        PartnerModifyComponent,  
       
        PartnerDeleteComponent,
        PartnerDetailComponent, 
        PartnerDeleteConfirmedComponent,
        
        RegistrationComponent,
        RegistrationDetailComponent,
        RegistrationsListComponent,
        PartnerRegistrationComponent,
        
        ClientRegistrationComponent,
        ClientModifyComponent,
        ClientDeleteComponent,
        ClientDeleteConfirmedComponent,

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
        PartnerDeleteServices,
        PartnerModifyServices,
        ClientRegistrationService,
        FileMapService,
        MapsChartsService,
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
