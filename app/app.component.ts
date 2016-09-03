import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegistrationComponent} from './registration.component';
import {AuditLogComponent} from './auditlog.component';
import {AuditDetailComponent} from './auditdetail.component';
import {BrandComponent} from './brand.component';
import {AlbumsComponent} from './albums.component';
import {AlbumComponent} from './album.component';
import {ContactComponent} from './contact.component';



@RouteConfig([
 //   { path: '/registrationlogs', name: 'RegistrationLogs', component: RegistrationLogsComponent, useAsDefault:true},
    { path: '/albums', name: 'Albums', component: AlbumsComponent},
    { path: '/albums/:id', name: 'Album', component: AlbumComponent },
    { path: '/brand', name: 'Brand', component: BrandComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent},
    
    { path: '/auditlog', name: 'AuditLog', component: AuditLogComponent},
    { path: '/auditdetail/:id', name: 'AuditDetail', component: AuditDetailComponent },
    { path: '/register', name: 'Register', component: RegistrationComponent},
    { path: '/*other', name: 'Other', redirectTo:['Albums']}
])

@Component({ 
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}