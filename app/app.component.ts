import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {RegistrationComponent} from './registration.component';
import {RegistrationsListComponent} from './registrations.list.component';
import {RegistrationDetailComponent} from './registrationdetail.component';

import {AuditLogComponent} from './auditlog.component';
import {AuditDetailComponent} from './auditdetail.component';
import {FileSentinelSplashComponent} from './filesentinel_splash.component';

import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';

import {ScheduleTransferComponent} from './schedule.transfer.component';
import {MapsComponent} from './maps.component';
import {ChartsComponent} from './charts.component';

import {FileMapComponent} from './filemap.component';


@RouteConfig([
 //   { path: '/registrationlogs', name: 'RegistrationLogs', component: RegistrationLogsComponent, useAsDefault:true},
    { path: '/albums', name: 'Albums', component: AlbumsComponent},
    { path: '/albums/:id', name: 'Album', component: AlbumComponent },
    { path: '/filesentinelsplash', name: 'FileSentinelSplash', component: FileSentinelSplashComponent},
    { path: '/schedule', name: 'Schedule', component: ScheduleTransferComponent},
    { path: '/maps', name: 'Maps', component: MapsComponent},
    { path: '/charts', name: 'Charts', component: ChartsComponent},
   
    { path: '/auditlog', name: 'AuditLog', component: AuditLogComponent},
    { path: '/auditdetail/:id', name: 'AuditDetail', component: AuditDetailComponent },
    { path: '/registrationslist/', name: 'RegistrationsList', component: RegistrationsListComponent },
    { path: '/register', name: 'Register', component: RegistrationComponent},
    { path: '/registrationresponse', name: 'RegistrationDetail', component: RegistrationDetailComponent},
    { path: '/filemap', name: 'FileMap', component: FileMapComponent},
    { path: '/*other', name: 'Other', redirectTo:['FileSentinelSplash']}
     
])

@Component({ 
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}