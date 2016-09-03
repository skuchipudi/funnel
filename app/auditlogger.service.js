System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AuditLoggerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuditLoggerService = (function () {
                function AuditLoggerService(_http) {
                    this._http = _http;
                    this._url = "http://ec2-54-174-128-188.compute-1.amazonaws.com:8080/auditlogger/entries/";
                    this._url2 = "http://jsonplaceholder.typicode.com/albums";
                    this._auditDetailUrl = "http://ec2-54-174-128-188.compute-1.amazonaws.com:8080/auditlogger/getentry/partnerId/";
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
            exports_1("AuditLoggerService", AuditLoggerService);
        }
    }
});
//# sourceMappingURL=auditlogger.service.js.map