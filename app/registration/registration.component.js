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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var registration_service_1 = require('./registration.service');
var registrationinfo_1 = require('./registrationinfo');
var token_1 = require('./token');
var RegistrationComponent = (function () {
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
            providers: [registration_service_1.RegistrationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, registration_service_1.RegistrationService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map