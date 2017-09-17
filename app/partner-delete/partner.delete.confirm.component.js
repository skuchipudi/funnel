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
var partner_delete_services_1 = require('../partner-delete/partner.delete.services');
var partner_detail_services_1 = require('../partner-detail/partner.detail.services');
var PartnerDeleteConfirmedComponent = (function () {
    function PartnerDeleteConfirmedComponent(_activatedRoute, _router, _partnerDeleteServices) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._partnerDeleteServices = _partnerDeleteServices;
        this._isLoading = true;
    }
    PartnerDeleteConfirmedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._partnerId = params['partnerId'];
            console.log('PartnerDeleteConfirmComponent().ngOnit()' + _this._partnerId);
            _this._partnerDeleteServices.deletePartner(_this._partnerId).
                subscribe(function (partner) {
                _this._isLoading = false;
                _this._partner = partner;
            });
        });
        this._router.navigate(['/partners']);
    };
    PartnerDeleteConfirmedComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-delete/partner.delete.component.html',
            providers: [partner_delete_services_1.PartnerDeleteServices, partner_detail_services_1.PartnerDetailServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_delete_services_1.PartnerDeleteServices])
    ], PartnerDeleteConfirmedComponent);
    return PartnerDeleteConfirmedComponent;
}());
exports.PartnerDeleteConfirmedComponent = PartnerDeleteConfirmedComponent;
//# sourceMappingURL=partner.delete.confirm.component.js.map