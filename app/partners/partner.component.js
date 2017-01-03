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
var partner_services_1 = require('./partner.services');
var router_1 = require('@angular/router');
var PartnerComponent = (function () {
    // customers: any[] = [];
    function PartnerComponent(_activatedRoute, _router, _partnerServices) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._partnerServices = _partnerServices;
        // turn if off if we are using JQuery
        this._isLoading = true;
    }
    PartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('PartnerComponent. ngOnit() called');
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            _this._partnerServices.getEntries().
                subscribe(function (entries) {
                _this._isLoading = false;
                _this._entries = entries;
            });
        });
        this._partnerServices.getTable();
    };
    PartnerComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partners/partner.component.html',
            providers: [partner_services_1.PartnerServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_services_1.PartnerServices])
    ], PartnerComponent);
    return PartnerComponent;
}());
exports.PartnerComponent = PartnerComponent;
//# sourceMappingURL=partner.component.js.map