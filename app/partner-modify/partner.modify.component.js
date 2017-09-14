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
var partner_modify_services_1 = require('../partner-modify/partner.modify.services');
var router_1 = require('@angular/router');
var PartnerModifyComponent = (function () {
    function PartnerModifyComponent(_activatedRoute, _router, _partnerModifyServices) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._partnerModifyServices = _partnerModifyServices;
        this._isLoading = true;
    }
    PartnerModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log('PartnerModifyComponent().partnerId =>' + params['partnerId']);
            _this._partnerId = params['partnerId'];
            _this._partnerModifyServices.getPartnerModifyServices(params['partnerId']).
                subscribe(function (partners) {
                _this._isLoading = false;
                _this._partners = partners;
            });
        });
    };
    PartnerModifyComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-modify/partner.modify.component.html',
            providers: [partner_modify_services_1.PartnerModifyServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_modify_services_1.PartnerModifyServices])
    ], PartnerModifyComponent);
    return PartnerModifyComponent;
}());
exports.PartnerModifyComponent = PartnerModifyComponent;
//# sourceMappingURL=partner.modify.component.js.map