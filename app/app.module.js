"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// module imports
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var app_routing_1 = require('./app.routing');
var index_1 = require('./guards/index');
// component imports
var app_component_1 = require('./app.component');
var home_component_1 = require('./home.component');
var auditlog_component_1 = require('./audit/auditlog.component');
var auditdetail_component_1 = require('./audit/auditdetail.component');
var filesentinel_splash_component_1 = require('./splash/filesentinel_splash.component');
var registration_component_1 = require('./registration/registration.component');
var registrations_list_component_1 = require('./registration/registrations.list.component');
var registrationdetail_component_1 = require('./registration/registrationdetail.component');
var schedule_transfer_component_1 = require('./schedule/schedule.transfer.component');
var maps_component_1 = require('./maps/maps.component');
var charts_component_1 = require('./charts/charts.component');
var filemap_component_1 = require('./filemap/filemap.component');
var not_found_component_1 = require('./not-found.component');
var index_2 = require('./login/index');
// service imports
var auditlogger_service_1 = require('./audit/auditlogger.service');
var registration_service_1 = require('./registration/registration.service');
var filemap_service_1 = require('./filemap/filemap.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                auditlog_component_1.AuditLogComponent,
                auditdetail_component_1.AuditDetailComponent,
                filesentinel_splash_component_1.FileSentinelSplashComponent,
                index_2.LoginComponent,
                registration_component_1.RegistrationComponent,
                registrationdetail_component_1.RegistrationDetailComponent,
                registrations_list_component_1.RegistrationsListComponent,
                schedule_transfer_component_1.ScheduleTransferComponent,
                maps_component_1.MapsComponent,
                charts_component_1.ChartsComponent,
                filemap_component_1.FileMapComponent,
                not_found_component_1.NotFoundComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                angular2_jwt_1.AUTH_PROVIDERS,
                auditlogger_service_1.AuditLoggerService,
                registration_service_1.RegistrationService,
                filemap_service_1.FileMapService,
                index_1.AuthGuard
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                // All your routers are in app.routing.ts
                app_routing_1.routing
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map