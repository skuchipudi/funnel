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
var client_registration_service_1 = require('./client.registration.service');
var client_registration_model_1 = require('./client.registration.model');
var ClientRegistrationComponent = (function () {
    function ClientRegistrationComponent(_router) {
        this._router = _router;
        // TODO: populate this later using a Service
        this.languages = ['maker_bank', 'euro_banc', 'bank_usa'];
        this._model = new client_registration_model_1.ClientRegistrationModel;
    }
    ClientRegistrationComponent.prototype.onSubmit = function (clientForm) {
        console.log('Client Registration.onSubmit() - ENTER');
        console.log('Client Registration.onSubmit() - EXIT');
    };
    ClientRegistrationComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/client-registration/client.registration.component.html',
            providers: [client_registration_service_1.ClientRegistrationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], ClientRegistrationComponent);
    return ClientRegistrationComponent;
}());
exports.ClientRegistrationComponent = ClientRegistrationComponent;
//# sourceMappingURL=client.registration.component.js.map