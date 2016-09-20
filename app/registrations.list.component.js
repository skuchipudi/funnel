System.register(['angular2/core', 'angular2/http', 'angular2/router', './registration.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, registration_service_1;
    var RegistrationsListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (registration_service_1_1) {
                registration_service_1 = registration_service_1_1;
            }],
        execute: function() {
            RegistrationsListComponent = (function () {
                function RegistrationsListComponent(_registrationService, _routeParms) {
                    this._registrationService = _registrationService;
                    this._routeParms = _routeParms;
                    this._isLoading = true;
                }
                RegistrationsListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._registrationService.getAllRegistrations().
                        subscribe(function (_registrations_list) {
                        _this._isLoading = false;
                        _this._registrations_list = _registrations_list;
                    });
                };
                RegistrationsListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Registrations</h1>\n         <div>\n         <i *ngIf=\"_isLoading\"  class=\"fa fa-spinner fa-spin fa-3x\"></i>\n         </div>\n         <table class=\"table table-striped table-hover \">\n         <thead>\n            <tr>\n             <th>Partner Id</th>\n             <th>Server Address</th>\n             <th>User Id</th>\n             <th>Remote File Path</th>\n             <th>Local File Path</th>\n             <th>File name </th>\n            </tr>\n         </thead>\n        <tbody>\n            <tr *ngFor = \"#registrations_list of _registrations_list\">\n              <td> {{ registrations_list.partnerId}}</td>\n              <td> {{ registrations_list.serverAddress}}</td>\n              <td> {{ registrations_list.userId}}</td>\n              <td> {{ registrations_list.remoteFilePath}}</td>\n              <td> {{ registrations_list.localFilePath}}</td>\n              <td> {{ registrations_list.filename}}</td>\n              </tr>\n        </tbody>\n        </table>  \n        ",
                        providers: [registration_service_1.RegistrationService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [registration_service_1.RegistrationService, router_1.RouteParams])
                ], RegistrationsListComponent);
                return RegistrationsListComponent;
            }());
            exports_1("RegistrationsListComponent", RegistrationsListComponent);
        }
    }
});
//# sourceMappingURL=registrations.list.component.js.map