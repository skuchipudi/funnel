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
var partner_registration_service_1 = require('./partner.registration.service');
var partner_registration_info_1 = require('./partner.registration.info');
var partner_registration_emailaddress_1 = require('./partner.registration.emailaddress');
var PartnerRegistrationComponent = (function () {
    function PartnerRegistrationComponent(_router, _registrationService) {
        this._router = _router;
        this._registrationService = _registrationService;
        this._partnerRegistrationInfo = new partner_registration_info_1.PartnerRegistrationInfo();
        this._partnerRegistrationInfo.partnerName = "Partner Name";
        this._partnerRegistrationInfo.phoneNumber = "Phone Number";
        this._partnerRegistrationInfo.emailAddress = new partner_registration_emailaddress_1.EmailAddress("heroes@hero.com");
        // TODO - Need to auto generate
        this._partnerRegistrationInfo.partnerId = "partnerId";
        this._partnerRegistrationInfo.partnerDescription = "Partner Description";
    }
    PartnerRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('PartnerRegistration.onSubmit() - ENTER');
        //this._router.navigate (['RegistrationDetail']);
        console.log('Partner Name  ==> ' + this._partnerRegistrationInfo.partnerName);
        console.log('Partner Id ==> ' + this._partnerRegistrationInfo.partnerId);
        console.log('Partner Description ==> ' + this._partnerRegistrationInfo.partnerDescription);
        this._registrationService.createRegistration(this._partnerRegistrationInfo).subscribe(function (registrationInfo) {
            return _this._partnerRegistrationInfo = registrationInfo;
        });
        console.log('PartnerRegistration.onSubmit() - EXIT');
        //this._router.navigate (['partners']);
        // post to the webservice
    };
    PartnerRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-registration/partner.registration.component.html',
            providers: [partner_registration_service_1.PartnerRegistrationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, partner_registration_service_1.PartnerRegistrationService])
    ], PartnerRegistrationComponent);
    return PartnerRegistrationComponent;
}());
exports.PartnerRegistrationComponent = PartnerRegistrationComponent;
//# sourceMappingURL=partner.registration.component.js.map