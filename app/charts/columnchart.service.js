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
require('rxjs/add/operator/map');
var ColumnChartService = (function () {
    function ColumnChartService() {
    }
    ColumnChartService.prototype.renderChart = function (data) {
        jQuery('#areachartcontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'FileSentinel Transfer Charts'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Log Entry'
                }
            },
            series: data
        });
    };
    ColumnChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ColumnChartService);
    return ColumnChartService;
}());
exports.ColumnChartService = ColumnChartService;
//# sourceMappingURL=columnchart.service.js.map