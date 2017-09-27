import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }         from '@angular/core';

import {HomeComponent} from './home.component';
import {AuditLogComponent} from './auditlogs/auditlogs.component';

import {FileSentinelSplashComponent} from './splash/filesentinel_splash.component';
import {LoginComponent} from './login/login.component';

import {RegistrationComponent} from './registration/registration.component';
import {RegistrationsListComponent} from './registration/registrations.list.component';
import {ScheduleTransferComponent} from './schedule/schedule.transfer.component';
import {PartnerComponent} from './partners/partner.component';
import {PartnerDetailComponent} from './partner-detail/partner.detail.component';
import {PartnerDeleteComponent} from './partner-delete/partner.delete.component';
import {PartnerDeleteConfirmedComponent} from './partner-delete/partner.delete.confirm.component';
import {PartnerModifyComponent} from './partner-modify/partner.modify.component';
import {PartnerModifyConfirmedComponent} from './partner-modify/partner.modify.confirm.component';


import {PartnerRegistrationComponent} from './partner-registration/partner.registration.component';
import {ClientRegistrationComponent} from './client-registration/client.registration.component';

import {MapsComponent} from './maps/maps.component';
import {ChartsComponent} from './charts/charts.component';
import {FileMapComponent} from './filemap/filemap.component';
import {NotFoundComponent} from './not-found.component';

import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
  { path: '', component: FileSentinelSplashComponent},
  // This routes to login
  { path: 'filesentinelsplash', component: FileSentinelSplashComponent},
  
  { path: 'auditlogs', component: AuditLogComponent, canActivate: [AuthGuard] },
  { path: 'partners', component: PartnerComponent, canActivate: [AuthGuard]},
  
  { path: 'partnerdetail/:partnerId', component: PartnerDetailComponent, canActivate: [AuthGuard]},
  { path: 'partnerdelete/:partnerId', component: PartnerDeleteComponent, canActivate: [AuthGuard]},
  { path: 'partnermodify/:partnerId', component: PartnerModifyComponent, canActivate: [AuthGuard]},
  
  { path: 'partnerconfirmdelete/:partnerId', component: PartnerDeleteConfirmedComponent, canActivate: [AuthGuard]},
  { path: 'partnerconfirmmodify/:partnerId', component: PartnerModifyConfirmedComponent, canActivate: [AuthGuard]},
  

  { path: 'registerpartner', component: PartnerRegistrationComponent, canActivate: [AuthGuard]},
  { path: 'registerclient', component: ClientRegistrationComponent, canActivate: [AuthGuard]},
 
  { path: 'registrationslist', component: RegistrationsListComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'maps', component: MapsComponent,canActivate: [AuthGuard]},
  { path: 'charts', component: ChartsComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent, canActivate: [AuthGuard]},
  { path: 'schedule', component: ScheduleTransferComponent,canActivate: [AuthGuard]},
  { path: 'filemap', component: FileMapComponent,canActivate: [AuthGuard]},
  // Catch all
  { path: '**', component: NotFoundComponent,canActivate: [AuthGuard] }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//export const routing = RouterModule.forRoot(appRoutes);
