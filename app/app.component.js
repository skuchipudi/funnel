System.register(['angular2/core', 'angular2/router', './audit/auditlog.component', './audit/auditdetail.component', './splash/filesentinel_splash.component', './registration/registration.component', './registration/registrations.list.component', './registration/registrationdetail.component', './schedule/schedule.transfer.component', './maps/maps.component', './charts/charts.component', './filemap/filemap.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auditlog_component_1, auditdetail_component_1, filesentinel_splash_component_1, registration_component_1, registrations_list_component_1, registrationdetail_component_1, schedule_transfer_component_1, maps_component_1, charts_component_1, filemap_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auditlog_component_1_1) {
                auditlog_component_1 = auditlog_component_1_1;
            },
            function (auditdetail_component_1_1) {
                auditdetail_component_1 = auditdetail_component_1_1;
            },
            function (filesentinel_splash_component_1_1) {
                filesentinel_splash_component_1 = filesentinel_splash_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (registrations_list_component_1_1) {
                registrations_list_component_1 = registrations_list_component_1_1;
            },
            function (registrationdetail_component_1_1) {
                registrationdetail_component_1 = registrationdetail_component_1_1;
            },
            function (schedule_transfer_component_1_1) {
                schedule_transfer_component_1 = schedule_transfer_component_1_1;
            },
            function (maps_component_1_1) {
                maps_component_1 = maps_component_1_1;
            },
            function (charts_component_1_1) {
                charts_component_1 = charts_component_1_1;
            },
            function (filemap_component_1_1) {
                filemap_component_1 = filemap_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        //   { path: '/registrationlogs', name: 'RegistrationLogs', component: RegistrationLogsComponent, useAsDefault:true},
                        { path: '/filesentinelsplash', name: 'FileSentinelSplash', component: filesentinel_splash_component_1.FileSentinelSplashComponent },
                        { path: '/schedule', name: 'Schedule', component: schedule_transfer_component_1.ScheduleTransferComponent },
                        { path: '/maps', name: 'Maps', component: maps_component_1.MapsComponent },
                        { path: '/charts', name: 'Charts', component: charts_component_1.ChartsComponent },
                        { path: '/auditlog', name: 'AuditLog', component: auditlog_component_1.AuditLogComponent },
                        { path: '/auditdetail/:id', name: 'AuditDetail', component: auditdetail_component_1.AuditDetailComponent },
                        { path: '/registrationslist/', name: 'RegistrationsList', component: registrations_list_component_1.RegistrationsListComponent },
                        { path: '/register', name: 'Register', component: registration_component_1.RegistrationComponent },
                        { path: '/registrationresponse', name: 'RegistrationDetail', component: registrationdetail_component_1.RegistrationDetailComponent },
                        { path: '/filemap', name: 'FileMap', component: filemap_component_1.FileMapComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['FileSentinelSplash'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map