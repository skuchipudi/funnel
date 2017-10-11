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
var PartnerDetailServices = (function () {
    function PartnerDetailServices(_http) {
        this._http = _http;
        // TODO: Use relative paths
        this.find_partner_url = 'http://localhost:8080/partnerservices/findbypartnerid/';
        //    private find_partner_url2 =
        //    'http://localhost:8080/partnerservices/findbypartnerid2/';
        this.delete_partner_url = 'http://localhost:8080/partnerservices/delete/';
        this.get_client_url = 'http://localhost:8080/partnerservices/getclients/';
    }
    PartnerDetailServices.prototype.getPartnerDetailsByPartnerId = function (partnerId) {
        console.log('PartnerDetailServices.getPartnerDetails() called ' + partnerId);
        return this._http.get(this.find_partner_url + partnerId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // getPartnerDetailsByPartnerId2( partnerId: String) {
    //     console.log('PartnerDetailServices.getPartnerDetails() 22 called ' + partnerId);
    //     return this._http.get(this.find_partner_url2 + partnerId)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }
    PartnerDetailServices.prototype.getClients = function (partnerId) {
        console.log('PartnerDetailServices.getClients() called ' + partnerId);
        return this._http.get(this.get_client_url + partnerId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PartnerDetailServices.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'PartnerDetail::Server Error');
    };
    PartnerDetailServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PartnerDetailServices);
    return PartnerDetailServices;
}());
exports.PartnerDetailServices = PartnerDetailServices;
//# sourceMappingURL=partner.detail.services.js.map