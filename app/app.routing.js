"use strict";
var router_1 = require('@angular/router');
var auditlog_component_1 = require('./audit/auditlog.component');
var auditdetail_component_1 = require('./audit/auditdetail.component');
var filesentinel_splash_component_1 = require('./splash/filesentinel_splash.component');
var registration_component_1 = require('./registration/registration.component');
var registrations_list_component_1 = require('./registration/registrations.list.component');
var schedule_transfer_component_1 = require('./schedule/schedule.transfer.component');
var maps_component_1 = require('./maps/maps.component');
var charts_component_1 = require('./charts/charts.component');
var filemap_component_1 = require('./filemap/filemap.component');
var not_found_component_1 = require('./not-found.component');
var appRoutes = [
    //{ path: '', component: LoginComponent},
    //{ path: 'filesentinelsplash', component: FileSentinelSplashComponent},
    { path: '', component: filesentinel_splash_component_1.FileSentinelSplashComponent },
    { path: 'filesentinelsplash', component: filesentinel_splash_component_1.FileSentinelSplashComponent },
    { path: 'auditlog', component: auditlog_component_1.AuditLogComponent },
    { path: 'auditdetail', component: auditdetail_component_1.AuditDetailComponent },
    { path: 'registrationslist', component: registrations_list_component_1.RegistrationsListComponent },
    { path: 'registration', component: registration_component_1.RegistrationComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'charts', component: charts_component_1.ChartsComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'schedule', component: schedule_transfer_component_1.ScheduleTransferComponent },
    { path: 'filemap', component: filemap_component_1.FileMapComponent },
    // Catch all
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//export const routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map