"use strict";
var router_1 = require('@angular/router');
var auditlog_component_1 = require('./audit/auditlog.component');
var auditdetail_component_1 = require('./audit/auditdetail.component');
var filesentinel_splash_component_1 = require('./splash/filesentinel_splash.component');
var registration_component_1 = require('./registration/registration.component');
var registrations_list_component_1 = require('./registration/registrations.list.component');
var schedule_transfer_component_1 = require('./schedule/schedule.transfer.component');
var partner_component_1 = require('./partners/partner.component');
var partner_detail_component_1 = require('./partner-detail/partner.detail.component');
var partner_registration_component_1 = require('./partner-registration/partner.registration.component');
var maps_component_1 = require('./maps/maps.component');
var charts_component_1 = require('./charts/charts.component');
var filemap_component_1 = require('./filemap/filemap.component');
var not_found_component_1 = require('./not-found.component');
var index_1 = require('./guards/index');
var appRoutes = [
    { path: '', component: filesentinel_splash_component_1.FileSentinelSplashComponent },
    // This routes to login
    { path: 'filesentinelsplash', component: filesentinel_splash_component_1.FileSentinelSplashComponent },
    { path: 'auditlog', component: auditlog_component_1.AuditLogComponent, canActivate: [index_1.AuthGuard] },
    { path: 'auditdetail', component: auditdetail_component_1.AuditDetailComponent, canActivate: [index_1.AuthGuard] },
    { path: 'partners', component: partner_component_1.PartnerComponent, canActivate: [index_1.AuthGuard] },
    { path: 'partnerdetail/:partnerId', component: partner_detail_component_1.PartnerDetailComponent, canActivate: [index_1.AuthGuard] },
    { path: 'registerpartner', component: partner_registration_component_1.PartnerRegistrationComponent, canActivate: [index_1.AuthGuard] },
    { path: 'registrationslist', component: registrations_list_component_1.RegistrationsListComponent, canActivate: [index_1.AuthGuard] },
    { path: 'registration', component: registration_component_1.RegistrationComponent, canActivate: [index_1.AuthGuard] },
    { path: 'maps', component: maps_component_1.MapsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'charts', component: charts_component_1.ChartsComponent, canActivate: [index_1.AuthGuard] },
    { path: 'register', component: registration_component_1.RegistrationComponent, canActivate: [index_1.AuthGuard] },
    { path: 'schedule', component: schedule_transfer_component_1.ScheduleTransferComponent, canActivate: [index_1.AuthGuard] },
    { path: 'filemap', component: filemap_component_1.FileMapComponent, canActivate: [index_1.AuthGuard] },
    // Catch all
    { path: '**', component: not_found_component_1.NotFoundComponent, canActivate: [index_1.AuthGuard] }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//export const routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map