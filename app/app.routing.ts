import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }         from '@angular/core';

import {HomeComponent} from './home.component';
import {AuditLogComponent} from './audit/auditlog.component';
import {AuditDetailComponent} from './audit/auditdetail.component';
import {FileSentinelSplashComponent} from './splash/filesentinel_splash.component';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationsListComponent} from './registration/registrations.list.component';
import {ScheduleTransferComponent} from './schedule/schedule.transfer.component';
import {LoginComponent} from './login/login.component';

import {MapsComponent} from './maps/maps.component';
import {ChartsComponent} from './charts/charts.component';
import {FileMapComponent} from './filemap/filemap.component';
import {NotFoundComponent} from './not-found.component';

import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
  //{ path: '', component: LoginComponent},
  //{ path: 'filesentinelsplash', component: FileSentinelSplashComponent},
  { path: '', component: FileSentinelSplashComponent},
  { path: 'filesentinelsplash', component: FileSentinelSplashComponent},

  { path: 'auditlog', component: AuditLogComponent},
  { path: 'auditdetail',  component: AuditDetailComponent },
  
  { path: 'registrationslist', component: RegistrationsListComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'charts', component: ChartsComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'schedule', component: ScheduleTransferComponent},
  { path: 'filemap', component: FileMapComponent},
  // Catch all
  { path: '**', component: NotFoundComponent }
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//export const routing = RouterModule.forRoot(appRoutes);
