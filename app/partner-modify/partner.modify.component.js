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
var partner_detail_services_1 = require('../partner-detail/partner.detail.services');
var router_1 = require('@angular/router');
var partner_modify_info_1 = require('../partner-modify/partner.modify.info');
var PartnerModifyComponent = (function () {
    function PartnerModifyComponent(_activatedRoute, _router, _partnerDetailServices) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._partnerDetailServices = _partnerDetailServices;
        this._isLoading = true;
        this._model = new partner_modify_info_1.PartnerModel();
    }
    PartnerModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log('PartnerModifyComponent().partnerId =>' + params['partnerId']);
            _this._partnerDetailServices.getPartnerDetailsByPartnerId(params['partnerId']).
                subscribe(function (partners) {
                _this._isLoading = false;
                // because what is returned is any array
                // just take the first element
                _this._model = partners[0];
            });
        });
    };
    PartnerModifyComponent.prototype.onSubmit = function (partnermodifyform) {
        console.log("partner modify form " + partnermodifyform);
    };
    PartnerModifyComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-modify/partner.modify.component.html',
            providers: [partner_detail_services_1.PartnerDetailServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_detail_services_1.PartnerDetailServices])
    ], PartnerModifyComponent);
    return PartnerModifyComponent;
}());
exports.PartnerModifyComponent = PartnerModifyComponent;
//# sourceMappingURL=partner.modify.component.js.map