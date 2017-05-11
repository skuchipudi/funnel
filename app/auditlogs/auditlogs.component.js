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
var auditlogs_service_1 = require('./auditlogs.service');
var router_1 = require('@angular/router');
var columnchart_service_1 = require('../charts/columnchart.service');
var AuditLogComponent = (function () {
    //private _data  =  [ {  data: [  [3,4], [4,2], [ 6,6], [7,2],[ 10,2] ]} ]
    //    {  data: [ [ 2,2], [3,4], [4,2], [ 6,6], [7,2]] } ]
    // {
    //		 	name: 'Audit Log Time series',
    //data: [	1 , 15, 30, 23, 40, 100, 20, 12]
    //             data :  [ [ 1,2], [2,4], [3,2], [ 5.6], [6,2]]
    //  data: [ [Date.UTC(2010, 2, 1), 71.5], [Date.UTC(2010, 0, 1), 29.9],[Date.UTC(2010, 2, 1), 71.5], [Date.UTC(2010, 4, 1), 10.5]]
    //}];
    function AuditLogComponent(_router, _auditLogService, _columnChartService) {
        this._router = _router;
        this._auditLogService = _auditLogService;
        this._columnChartService = _columnChartService;
        this._isLoading = false;
        // TODO - Change this
        //this._partnerId="maker_bank_id";
        //this._clientId="guardian_client_id";
    }
    AuditLogComponent.prototype.makeData = function () {
        // for ( let entry of this._entries){
        console.log("makeData() called");
        var datum = [];
        console.log("this._entries: " + this._entries.length);
        for (var i in this._entries) {
            //   console.log ("entries.logEntry =>" + this._entries[i].logEntry);
            var logEntry = this._entries[i].logEntry;
            var logEntryLength = this._entries[i].logEntry.length;
            var auditTime = this._entries[i].timeStamp;
            var d = new Date(auditTime);
            datum.push([d.getTime(), 20]);
        }
        datum.sort();
        this._data = [{ data: datum }, name];
    };
    AuditLogComponent.prototype.ngOnInit = function () {
        console.log('Audit Component.ngOnInit() - ENTER');
        //     this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
        //              subscribe(entries => {
        //                this._entries=entries;
        //                this._isLoading = false;
        //                // You have to call it here as this is an async operation
        //                 this.makeData();
        //               });
        //         this._areaChartService.renderChart(this._data);
        var table = this._auditLogService.getTable(this._partnerId, this._clientId);
    };
    AuditLogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('Audit Component.onSubmit() - ENTER');
        // Use this if you want to use the Angular2 paradigm
        // Remember this is an async operation
        // so you have to call render chart within the operation
        this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
            subscribe(function (entries) {
            _this._entries = entries;
            _this._isLoading = false;
            // make sure to call this here to populate the entries into the graph plot
            _this.makeData();
            _this._columnChartService.renderChart(_this._data);
        });
        // this is used by the Ajax service
        var table = this._auditLogService.getTable(this._partnerId, this._clientId);
    };
    AuditLogComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/auditlogs/auditlogs.component.html',
            providers: [auditlogs_service_1.AuditLogsService, columnchart_service_1.ColumnChartService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auditlogs_service_1.AuditLogsService, columnchart_service_1.ColumnChartService])
    ], AuditLogComponent);
    return AuditLogComponent;
}());
exports.AuditLogComponent = AuditLogComponent;
//# sourceMappingURL=auditlogs.component.js.map