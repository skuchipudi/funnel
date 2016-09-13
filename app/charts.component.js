System.register(['angular2/core', 'angular2/router', './barchart.service', './piechart.service', './areachart.service'], function(exports_1, context_1) {
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
    var core_1, router_1, barchart_service_1, piechart_service_1, areachart_service_1;
    var ChartsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (barchart_service_1_1) {
                barchart_service_1 = barchart_service_1_1;
            },
            function (piechart_service_1_1) {
                piechart_service_1 = piechart_service_1_1;
            },
            function (areachart_service_1_1) {
                areachart_service_1 = areachart_service_1_1;
            }],
        execute: function() {
            ChartsComponent = (function () {
                function ChartsComponent(_barChartService, _pieChartService, _areaChartService) {
                    this._barChartService = _barChartService;
                    this._pieChartService = _pieChartService;
                    this._areaChartService = _areaChartService;
                }
                ChartsComponent.prototype.ngAfterViewInit = function () {
                    this._areaChartService.renderChart();
                    //this._barChartService.renderChart();
                    this._pieChartService.renderPie();
                };
                ChartsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Log Charts</h1>\n\t\t<table>\n\t\t<tr>\n        \t<td>\n\t\t\t\t<div style=\"width:40%\" id=\"areachartcontainer\"></div>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<div style=\"width:55%\" id =\"piecontainer\"></div>\n\t\t\t</td>\n\t\t</tr>\n\t\t<tr>\n\t\t<!-- TODO move to another page later\t<div style=\"width:100%\" id=\"barchartcontainer\"></div> -->\n\t\t</tr>\n\t\t</table>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [barchart_service_1.BarChartService, piechart_service_1.PieChartService, areachart_service_1.AreaChartService]
                    }), 
                    __metadata('design:paramtypes', [barchart_service_1.BarChartService, piechart_service_1.PieChartService, areachart_service_1.AreaChartService])
                ], ChartsComponent);
                return ChartsComponent;
            }());
            exports_1("ChartsComponent", ChartsComponent);
        }
    }
});
//# sourceMappingURL=charts.component.js.map