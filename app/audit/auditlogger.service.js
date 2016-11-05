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
var AuditLoggerService = (function () {
    function AuditLoggerService(_http) {
        this._http = _http;
        this._url = "http://ec2-54-210-61-136.compute-1.amazonaws.com:8081/auditlogger/entries/";
        this._auditDetailUrl = "http://ec2-54-210-61-136.compute-1.amazonaws.com:8081/auditlogger/getentry/partnerId/";
        this._url2 = "http://jsonplaceholder.typicode.com/albums";
    }
    AuditLoggerService.prototype.getAlbums = function () {
        return this._http.get(this._url2)
            .map(function (res) { return res.json(); });
    };
    AuditLoggerService.prototype.getAuditLogs = function () {
        return this._http.get(this._url)
            .map(function (res) { return res.json(); });
    };
    AuditLoggerService.prototype.getAuditDetail = function (id) {
        return this._http.get(this._auditDetailUrl + id)
            .map(function (res) { return res.json(); });
    };
    AuditLoggerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuditLoggerService);
    return AuditLoggerService;
}());
exports.AuditLoggerService = AuditLoggerService;
//# sourceMappingURL=auditlogger.service.js.map