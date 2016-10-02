System.register(['angular2/core', 'angular2/router', 'angular2/http', './registration.service', './registrationinfo', './token'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, registration_service_1, registrationinfo_1, token_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (registration_service_1_1) {
                registration_service_1 = registration_service_1_1;
            },
            function (registrationinfo_1_1) {
                registrationinfo_1 = registrationinfo_1_1;
            },
            function (token_1_1) {
                token_1 = token_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent(_router, _registrationService) {
                    this._router = _router;
                    this._registrationService = _registrationService;
                }
                RegistrationComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    var regInfo = this.makeRegistrationInfo(form);
                    this._registrationService.createRegistration(regInfo)
                        .subscribe(function (registration) {
                        _this._registration = registration;
                    });
                    this._router.navigate(['RegistrationDetail']);
                };
                RegistrationComponent.prototype.makeRegistrationInfo = function (form) {
                    // return regInfo: RegistrationInfo;
                    var token = new token_1.Token("secretKey", "status");
                    var registrationInfo = new registrationinfo_1.RegistrationInfo(token);
                    registrationInfo.serverAddress = form.value.serveraddress;
                    registrationInfo.localFilePath = form.value.localfilepath;
                    registrationInfo.remoteFilePath = form.value.remotefilepath;
                    registrationInfo.userId = form.value.serveruserid;
                    registrationInfo.password = form.value.serverpassword;
                    registrationInfo.filename = form.value.filename;
                    // TODO - this should be auto created
                    registrationInfo.partnerId = form.value.partnerId;
                    registrationInfo.partnerName = form.value.partnername;
                    registrationInfo.partnerDescription = form.value.partnerdescription;
                    return registrationInfo;
                };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/registration/registration.component.html',
                        providers: [registration_service_1.RegistrationService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, registration_service_1.RegistrationService])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map