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
var ClientModifyServices = (function () {
    function ClientModifyServices(_http) {
        this._http = _http;
        this._client_modify_url = 'http://localhost:8080/partnerservices/modifyclient/';
    }
    ClientModifyServices.prototype.modifyClient = function (clientModifyInfo) {
        // This has be a Post to Save the Partner 
        // Similar to the Partner Registration 
        console.log('Modify Client Posted');
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // TODO - YOu need to create the client wrapper
        // that consists of the partnerid and the client object
        var clientModifyInfoJSON = JSON.stringify(clientModifyInfo);
        console.log('Modify Client JSON =>' + clientModifyInfoJSON);
        //    
        return this._http.post(this._client_modify_url, clientModifyInfoJSON, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ClientModifyServices.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    ClientModifyServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClientModifyServices);
    return ClientModifyServices;
}());
exports.ClientModifyServices = ClientModifyServices;
//# sourceMappingURL=client.modify.services.js.map