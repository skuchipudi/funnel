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
var AuditLogsService = (function () {
    function AuditLogsService(_http) {
        this._http = _http;
        this.get_audit_logs = 'http://localhost:8080/partnerservices/getauditlogs/';
    }
    // Use this if you do wan to use the Angular 2 feather and not the JQuery 
    AuditLogsService.prototype.getAuditLogsByPartnerAndClientID = function (partnerId, clientId) {
        console.log('AuditLogsService.getAuditLogsByPartnerAndClientID() called ' + partnerId + " & " + clientId);
        return this._http.get(this.get_audit_logs + "partnerId/" + partnerId + "/clientId/" + clientId)
            .map(function (res) { return res.json(); });
    };
    // This is the JQuery Table - has sorting and search and paging capabiliti
    // Note using this as I am not using JQuery
    //https://datatables.net/examples/index
    AuditLogsService.prototype.getTable = function (partnerId, clientId) {
        console.log("getTable() " + partnerId + "  " + clientId);
        var table = jQuery('#auditlogstable').DataTable({
            "ajax": {
                "url": "http://localhost:8080/partnerservices/getauditlogs/partnerId/" + partnerId +
                    "/clientId/" + clientId,
                "dataSrc": "",
                "type": "GET",
            },
            "columns": [
                { "data": "partnerId" },
                { "data": "clientId" },
                { "data": "logEntry" },
                { "data": "timeStamp" },
            ],
            // https://datatables.net/manual/tech-notes/3
            // import to destroy the table or else
            // this will give a reinitialization error
            "destroy": true,
            "retrieve": false,
            "paging": true,
            "dom": 'Bfrtip',
            "buttons": ["copy", "csv", "excel"],
        });
        return table;
    };
    AuditLogsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuditLogsService);
    return AuditLogsService;
}());
exports.AuditLogsService = AuditLogsService;
// "ajax": {
//                 "url": "http://localhost:8080/partnerservices/entries/",
//                 "type": "GET",
//                 "dataSrc": "",
//            },
//# sourceMappingURL=auditlogs.service.js.map