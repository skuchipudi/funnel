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
var mapschart_service_1 = require('../charts/mapschart.service');
var auditlogs_service_1 = require('../auditlogs/auditlogs.service');
var router_1 = require('@angular/router');
var MapsComponent = (function () {
    function MapsComponent(_router, _mapsChartsService, _auditLogService) {
        this._router = _router;
        this._mapsChartsService = _mapsChartsService;
        this._auditLogService = _auditLogService;
        this._isLoading = false;
        // 
        this._data1 = [{
                name: 'London',
                lat: 51.507222,
                lon: -0.1275
            },
            {
                name: 'Glasgow',
                lat: 55.858,
                lon: -4.259
            },
            {
                name: 'Hyderabad',
                lat: 17.3850,
                lon: 78.4867
            },
            {
                name: 'Bristol',
                lat: 51.45,
                lon: -2.583333
            }, {
                name: 'Jacksonville ',
                lat: 30.3322,
                lon: -81.6557
            },
            {
                name: 'Frankfurt',
                lat: 50.1109,
                lon: 8.6821
            },
            {
                name: 'Beijing',
                lat: 39.9042,
                lon: 116.4074
            },
            {
                name: 'New York',
                lat: 40.7128,
                lon: -74.0059
            }
        ];
    }
    MapsComponent.prototype.ngOnInit = function () {
        // TODO  - Get this from the form
        //this._auditLogService.getAuditLogsByPartnerAndClientID("partnerId", "clientId");
        this._mapsChartsService.renderChart(this._data1);
    };
    MapsComponent.prototype.makeMapData = function () {
        this._data = [];
    };
    MapsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
            subscribe(function (entries) {
            _this._entries = entries;
            _this._isLoading = false;
            // make sure to call this here to populate the entries into the graph plot
            _this.makeMapData();
            _this._mapsChartsService.renderChart(_this._data1);
        });
    };
    MapsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/maps/maps.component.html',
            providers: [mapschart_service_1.MapsChartsService, auditlogs_service_1.AuditLogsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, mapschart_service_1.MapsChartsService, auditlogs_service_1.AuditLogsService])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.js.map