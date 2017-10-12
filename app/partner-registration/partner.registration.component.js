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
var partner_model_1 = require('../models/partner.model');
var partner_detail_services_1 = require('../partner-detail/partner.detail.services');
var PartnerRegistrationComponent = (function () {
    function PartnerRegistrationComponent(_router, _registrationService, _partnerDetailService) {
        this._router = _router;
        this._registrationService = _registrationService;
        this._partnerDetailService = _partnerDetailService;
        this._partnerAlreadyExists = false;
        this._partnerRegistrationInfo = new partner_model_1.Partner();
        this._partnerRegistrationInfo.partnerDescription = "";
    }
    PartnerRegistrationComponent.prototype.validatePhoneNumber = function (phonenumber) {
        console.log("validatePhoneNumber called");
        // TODO write the function to validate
        //console.log('phonenumber.value=>' + phonenumber.value.length);
        // TODO add additional validations
        //if(phonenumber.value.length != 14){
        //    console.log("value true");
        this._partnerRegistrationInfo.hasPhoneNumberError = false;
        //} else
    };
    PartnerRegistrationComponent.prototype.validatePartnerId = function (partnerId) {
        var _this = this;
        console.log("partnerId.trim.length()==>" + partnerId.value.trim().length);
        if (partnerId.value.trim().length == 0)
            return false;
        else {
            console.log("length is not zero");
            partnerId = partnerId.value.trim();
            // Note: Trim the partner id and re-assign or you
            // will end up create a partner_id with spaces which is not good
            // and difficult to retreive and maintain
            this._partnerRegistrationInfo.partnerId = partnerId;
            //console.log('partnerId ==>' + partnerId);
            this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId).subscribe(function (partnerInfo) {
                //      console.log('partnerInfo ->' + partnerInfo);
                if (partnerInfo[0] == null) {
                    _this._partnerAlreadyExists = false;
                }
                else if (partnerInfo[0].partnerId = partnerId) {
                    _this._partnerAlreadyExists = true;
                }
            });
        }
    };
    PartnerRegistrationComponent.prototype.onSubmit = function (partnerForm) {
        // console.log('PartnerRegistration.onSubmit() - ENTER');
        // clean up spaces before submitting.
        //    this._partnerRegistrationInfo.partnerId.trim();
        //    this._partnerRegistrationInfo.partnerName.trim();
        //    this._partnerRegistrationInfo.partnerDescription.trim();
        //    this._partnerRegistrationInfo.phoneNumber.trim();
        //    this._partnerRegistrationInfo.serverAddress.trim();
        //    this._partnerRegistrationInfo.emailAddress.emailAddress.trim();
        //    this._partnerRegistrationInfo.userid.trim();
        //    this._partnerRegistrationInfo.password.trim();
        //    this._partnerRegistrationInfo.filePath.trim();
        var _this = this;
        this._registrationService.createRegistration(this._partnerRegistrationInfo).
            subscribe(function (registrationInfo) {
            _this._partnerRegistrationInfo = registrationInfo;
            _this._router.navigate(['/partners']);
        });
        //console.log('PartnerRegistration.onSubmit() - EXIT');
    };
    PartnerRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-registration/partner.registration.component.html',
            providers: [partner_registration_service_1.PartnerRegistrationService, partner_detail_services_1.PartnerDetailServices]
        }), 
        __metadata('design:paramtypes', [router_1.Router, partner_registration_service_1.PartnerRegistrationService, partner_detail_services_1.PartnerDetailServices])
    ], PartnerRegistrationComponent);
    return PartnerRegistrationComponent;
}());
exports.PartnerRegistrationComponent = PartnerRegistrationComponent;
//# sourceMappingURL=partner.registration.component.js.map