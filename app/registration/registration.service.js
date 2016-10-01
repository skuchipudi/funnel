System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var RegistrationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            //https://scotch.io/tutorials/angular-2-http-requests-with-observables
            RegistrationService = (function () {
                function RegistrationService(_http) {
                    this._http = _http;
                    this._create_registration_url = "http://ec2-54-174-128-188.compute-1.amazonaws.com:8082/registrationentity/create/registrationInfo/";
                    this._get_registration_url = "http://ec2-54-174-128-188.compute-1.amazonaws.com:8082/registrationentity/get/registrationInfo/token/BREAK_ANKLES";
                    this._get_all_registrations_url = "http://ec2-54-174-128-188.compute-1.amazonaws.com:8082/registrationentity/get/registrationInfo/entries/";
                }
                RegistrationService.prototype.getRegistrationDetails = function (partnerid) {
                    return this._http.get(this._get_registration_url)
                        .map(function (res) { return res.json(); });
                };
                RegistrationService.prototype.getAllRegistrations = function () {
                    return this._http.get(this._get_all_registrations_url)
                        .map(function (res) { return res.json(); });
                };
                RegistrationService.prototype.createRegistration = function (registrationInfo) {
                    console.log('createRegistration invoked!');
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var registrationInfoJSON = JSON.stringify(registrationInfo);
                    return this._http.post(this._create_registration_url, registrationInfoJSON, options)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                RegistrationService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                RegistrationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RegistrationService);
                return RegistrationService;
            }());
            exports_1("RegistrationService", RegistrationService);
        }
    }
});
//# sourceMappingURL=registration.service.js.map