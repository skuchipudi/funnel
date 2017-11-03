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
var client_delete_services_1 = require('../client-delete/client.delete.services');
var ClientDeleteConfirmedComponent = (function () {
    function ClientDeleteConfirmedComponent(_activatedRoute, _router, _clientDeleteServices) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._clientDeleteServices = _clientDeleteServices;
        this._isLoading = true;
    }
    ClientDeleteConfirmedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this._partnerId = params['partnerId'];
            _this._clientId = params['clientId'];
            console.log('ClientDeleteConfirmComponent().ngOnit()' + _this._partnerId);
            _this._clientDeleteServices.delete(_this._partnerId, _this._clientId).
                subscribe(function (partner) {
                _this._isLoading = false;
                _this._partner = partner;
                // after deleting navigate to the partner's tab
                _this._router.navigate(['/partners']);
            });
        });
    };
    ClientDeleteConfirmedComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-delete/partner.delete.component.html',
            providers: [client_delete_services_1.ClientDeleteServices]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, client_delete_services_1.ClientDeleteServices])
    ], ClientDeleteConfirmedComponent);
    return ClientDeleteConfirmedComponent;
}());
exports.ClientDeleteConfirmedComponent = ClientDeleteConfirmedComponent;
//# sourceMappingURL=client.delete.confirm.component.js.map