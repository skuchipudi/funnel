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
var PieChartService = (function () {
    function PieChartService() {
    }
    // private _url = "http://jsonplaceholder.typicode.com/albums";
    // use this to hit the service
    PieChartService.prototype.renderPie = function () {
        jQuery('#piecontainer').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares January, 2015 to May, 2015'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: [{
                            name: 'Microsoft Internet Explorer',
                            y: 56.33
                        }, {
                            name: 'Chrome',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Firefox',
                            y: 10.38
                        }, {
                            name: 'Safari',
                            y: 4.77
                        }, {
                            name: 'Opera',
                            y: 0.91
                        }, {
                            name: 'Proprietary or Undetectable',
                            y: 0.2
                        }]
                }]
        });
    }; // end of renderPie
    PieChartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PieChartService);
    return PieChartService;
}());
exports.PieChartService = PieChartService;
//# sourceMappingURL=piechart.service.js.map