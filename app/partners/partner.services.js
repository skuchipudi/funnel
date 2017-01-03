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
require('rxjs/add/operator/map');
var PartnerServices = (function () {
    function PartnerServices(_http) {
        this._http = _http;
        this._url = 'http://localhost:8080/partnerservices/entries/';
    }
    PartnerServices.prototype.getEntries = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    // Note using this as I am not using JQuery
    //https://datatables.net/examples/index
    PartnerServices.prototype.getTable = function () {
        var table = jQuery('#partnerstable').DataTable({
            "ajax": {
                "url": "http://localhost:8080/partnerservices/entries/",
                "type": "GET",
                "dataSrc": "",
            },
            "columns": [
                { "data": "partnerName" },
                { "data": "partnerDescription" },
                { "data": "emailAddress.emailAddress" },
            ]
        });
    };
    PartnerServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PartnerServices);
    return PartnerServices;
}());
exports.PartnerServices = PartnerServices;
//# sourceMappingURL=partner.services.js.map