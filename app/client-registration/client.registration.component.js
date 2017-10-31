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
var client_registration_service_1 = require('./client.registration.service');
var client_wrapper_model_1 = require('../models/client.wrapper.model');
var partner_services_1 = require('../partners/partner.services');
var partner_model_1 = require('../models/partner.model');
var router_1 = require('@angular/router');
var partner_detail_services_1 = require('../partner-detail/partner.detail.services');
var ClientRegistrationComponent = (function () {
    function ClientRegistrationComponent(_router, _activatedRoute, _registrationService, _partnerService, _partnerDetailService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._registrationService = _registrationService;
        this._partnerService = _partnerService;
        this._partnerDetailService = _partnerDetailService;
        this._isLoading = true;
        this._partnerIdIsNotValid = false;
        this._clientRegistrationModel = new client_wrapper_model_1.ClientWrapperModel();
        this._partner = new partner_model_1.Partner();
    }
    ClientRegistrationComponent.prototype.ngOnInit = function () {
        console.log('ClientRegistration. ngOnit() called');
    };
    ClientRegistrationComponent.prototype.validatePartnerId = function (partnerId) {
        var _this = this;
        //console.log("validatePartnerId called=> " + partnerId.value);
        this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId.value).subscribe(function (partnerInfo) {
            _this._partner = partnerInfo[0];
            //console.log('partner returned  =>' + JSON.stringify(this._partner));
            //console.log('partnerid returned =>' + this._partner.partnerId);
            //if(partnerId.value == this._partner.partnerId)
            if (_this._partner == null)
                _this._partnerIdIsNotValid = true;
            else
                _this._partnerIdIsNotValid = false;
        });
    };
    ClientRegistrationComponent.prototype.onSubmit = function (clientForm) {
        var _this = this;
        console.log('ClientRegistration.onSubmit() - ENTER');
        this._registrationService.createRegistration(this._clientRegistrationModel).subscribe(function (registrationInfo) {
            return _this._clientRegistrationModel = registrationInfo;
        });
        this._router.navigate(['/partners']);
        console.log('ClientRegistration.onSubmit() - EXIT');
    };
    ClientRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/client-registration/client.registration.component.html',
            providers: [client_registration_service_1.ClientRegistrationService, partner_detail_services_1.PartnerDetailServices, partner_services_1.PartnerServices]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, client_registration_service_1.ClientRegistrationService, partner_services_1.PartnerServices, partner_detail_services_1.PartnerDetailServices])
    ], ClientRegistrationComponent);
    return ClientRegistrationComponent;
}());
exports.ClientRegistrationComponent = ClientRegistrationComponent;
//# sourceMappingURL=client.registration.component.js.map