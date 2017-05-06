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
var AreaChartService = (function () {
    function AreaChartService() {
    }
    AreaChartService.prototype.renderChart = function (data) {
        jQuery('#areachartcontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'FileSentinel Transfer Charts'
            },
            subtitle: {},
            xAxis: {},
            yAxis: {
                title: {
                    text: 'Log Entry'
                },
            },
            tooltip: {},
            // plotOptions: {
            // 	area: {
            // 		pointStart: 0,
            // 		marker: {
            // 			enabled: false,
            // 			symbol: 'circle',
            // 			radius: 2,
            // 			states: {
            // 				hover: {
            // 					enabled: true
            // 				}
            // 			}
            // 		}
            // 	}
            // },
            series: data
        });
    };
    AreaChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AreaChartService);
    return AreaChartService;
}());
exports.AreaChartService = AreaChartService;
//# sourceMappingURL=areachart.service.js.map