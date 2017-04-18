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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
//https://scotch.io/tutorials/angular-2-http-requests-with-observables
var ClientRegistrationService = (function () {
    function ClientRegistrationService(_http) {
        this._http = _http;
        this._create_partner_client_registration_url = "http://localhost:8080/partnerservices/create/";
    }
    ClientRegistrationService.prototype.createRegistration = function (_clientRegistrationModel) {
        console.log('createRegistration ENTER');
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var clientRegistrationInfoJSON = JSON.stringify(_clientRegistrationModel);
        console.log("createClientRegistration()=>" + clientRegistrationInfoJSON);
        return this._http.post(this._create_partner_client_registration_url, clientRegistrationInfoJSON, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ClientRegistrationService.prototype.handleError = function (error) {
        console.error("handleError()" + error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ClientRegistrationService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('extractData=>' + body);
        return body.data || {};
    };
    ClientRegistrationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientRegistrationService);
    return ClientRegistrationService;
}());
exports.ClientRegistrationService = ClientRegistrationService;
//# sourceMappingURL=client.registration.service.js.map