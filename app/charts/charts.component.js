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
var barchart_service_1 = require('./barchart.service');
var piechart_service_1 = require('./piechart.service');
var columnchart_service_1 = require('./columnchart.service');
var ChartsComponent = (function () {
    function ChartsComponent(_barChartService, _pieChartService, _areaChartService) {
        this._barChartService = _barChartService;
        this._pieChartService = _pieChartService;
        this._areaChartService = _areaChartService;
    }
    ChartsComponent.prototype.ngAfterViewInit = function () {
        // populate by call the data service																																									
        var daata = [
            {
                name: 'Audit Log Time series - 	',
                data: [25, 5000, 120, 40000, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                    4238, 5221, 120, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                    5915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049, 33952, 35804, 120, 39197, 45000, 43000, 41000, 39000, 37000,
                    35000, 33000, 2, 3, 4, 25000, 24000, 23000, 22000,
                    21000, 20000, 120, 18000, 18000, 17000, 16000]
            }
        ];
        this._areaChartService.renderChart(daata);
        this._barChartService.renderChart();
        this._pieChartService.renderPie(); // data hard coded
    };
    ChartsComponent = __decorate([
        core_1.Component({
            template: "\n        <h1>Log Charts</h1>\n\t\t<table>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t\t<div style=\"width:40%\" id=\"areachartcontainer\"></div>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<div style=\"width:55%\" id=\"piecontainer\"></div>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t<!-- TODO move to another page later\t<div style=\"width:100%\" id=\"barchartcontainer\"></div> -->\n\t\t</tr>\n\t\t</table>\n        ",
            providers: [barchart_service_1.BarChartService, piechart_service_1.PieChartService, columnchart_service_1.ColumnChartService]
        }), 
        __metadata('design:paramtypes', [barchart_service_1.BarChartService, piechart_service_1.PieChartService, columnchart_service_1.ColumnChartService])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;
//# sourceMappingURL=charts.component.js.map