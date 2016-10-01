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
    var RegistrationDetailComponent;
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
            RegistrationDetailComponent = (function () {
                function RegistrationDetailComponent(_registrationService, _routeParms) {
                    this._registrationService = _registrationService;
                    this._routeParms = _routeParms;
                    this._isLoading = true;
                }
                RegistrationDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var partnerid = "BREAK_ANKLES";
                    this._registrationService.getRegistrationDetails(partnerid).
                        subscribe(function (registrationDetail) {
                        _this._isLoading = false;
                        _this._registrationDetail = registrationDetail;
                    });
                    this._registrationService.getAllRegistrations().
                        subscribe(function (all_registrations) {
                        _this._isLoading = false;
                        _this._all_registrations = all_registrations;
                    });
                };
                RegistrationDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n       \n        <h1>Registrations List</h1>\n         <div>\n         <i *ngIf=\"_isLoading\"  class=\"fa fa-spinner fa-spin fa-3x\"></i>\n         </div>\n         <table class=\"table table-striped table-hover \">\n         <thead>\n            <tr>\n             <th>Partner Id</th>\n             <th>Server Address</th>\n             <th>User Id</th>\n             <th>Remote File Path</th>\n             <th>Local File Path</th>\n             <th>File name </th>\n            </tr>\n         </thead>\n        <tbody>\n            <tr *ngFor = \"#all_registrations of _all_registrations\">\n              <td> {{all_registrations.partnerId}}</td>\n              <td> {{all_registrations.serverAddress}}</td>\n              <td> {{all_registrations.userId}}</td>\n              <td> {{all_registrations.remoteFilePath}}</td>\n              <td> {{all_registrations.localFilePath}}</td>\n              <td> {{all_registrations.filename}}</td>\n              </tr>\n        </tbody>\n        </table>  \n\n        \n        <h1>Registration Details</h1>\n        <div *ngFor = \"#registrationDetail of _registrationDetail\">\n        Token Status  = {{registrationDetail.token.status}}<p>\n        <p>\n        Token Secret Key = {{registrationDetail.token.secretKey}}<p>\n        User Id = {{registrationDetail.userId}}<p>\n        Password *  = {{registrationDetail.password}}<p>\n       \n        Remote File Path  = {{registrationDetail.remoteFilePath}}<p>\n        Local File Path = {{registrationDetail.localFilePath}}<p>\n        File name  = {{registrationDetail.fileName}}<p>\n        Partner Id  = {{registrationDetail.partnerId}}<p>\n        </div>  \n\n\n        ",
                        providers: [registration_service_1.RegistrationService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [registration_service_1.RegistrationService, router_1.RouteParams])
                ], RegistrationDetailComponent);
                return RegistrationDetailComponent;
            }());
            exports_1("RegistrationDetailComponent", RegistrationDetailComponent);
        }
    }
});
//# sourceMappingURL=registrationdetail.component.js.map