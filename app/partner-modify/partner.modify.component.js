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
var partner_modify_info_1 = require('../partner-modify/partner.modify.info');
var PartnerModifyComponent = (function () {
    function PartnerModifyComponent(_activatedRoute, _router, _model) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._model = _model;
        this._isLoading = true;
        this._model = new partner_modify_info_1.PartnerModel();
    }
    PartnerModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            console.log('PartnerModifyComponent().partnerId =>' + params['partnerId']);
            _this._partnerId = params['partnerId'];
        });
    };
    PartnerModifyComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-delete/partner.delete.component.html',
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_modify_info_1.PartnerModel])
    ], PartnerModifyComponent);
    return PartnerModifyComponent;
}());
exports.PartnerModifyComponent = PartnerModifyComponent;
//# sourceMappingURL=partner.modify.component.js.map