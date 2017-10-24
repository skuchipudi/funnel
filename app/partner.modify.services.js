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
var PartnerModifyServices = (function () {
    function PartnerModifyServices(_http) {
        this._http = _http;
        this._partner_modify_url = 'http://localhost:8080/partnerservices/modify/';
    }
    PartnerModifyServices.prototype.modifyPartner = function (partner) {
        // This has be a Post to Save the Partner 
        // Similar to the Partner Registration 
        console.log('Modify Partner Posted');
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var partnerJSON = JSON.stringify(partner);
        console.log('Modify Partner JSON =>' + partnerJSON);
        //    
        return this._http.post(this._partner_modify_url, partnerJSON, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    PartnerModifyServices.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    PartnerModifyServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PartnerModifyServices);
    return PartnerModifyServices;
}());
exports.PartnerModifyServices = PartnerModifyServices;
// createRegistration(registrationInfo: Partner)
// {
//     console.log('createRegistration ENTER');
//     let headers = new Headers({'Content-Type': 'application/json'});
//     let options = new RequestOptions({headers: headers});
//     let registrationInfoJSON = JSON.stringify(registrationInfo);
//     //console.log("createRegistration()=>"+ registrationInfoJSON);
//     return this._http.post(this._create_partner_registration_url, registrationInfoJSON, options)
//                  .map((response:Response) => response.json())
//                  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
// }
//# sourceMappingURL=partner.modify.services.js.map