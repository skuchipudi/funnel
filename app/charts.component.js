System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var ChartsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ChartsComponent = (function () {
                function ChartsComponent() {
                    this.data = [
                        {
                            name: 'Daily Currency Transfers',
                            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                        },
                        {
                            name: 'Daily Currency Deposits',
                            data: [null, null, null, null, null, null, null, null, null, null,
                                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                                21000, 20000, 19000, 18000, 18000, 17000, 16000]
                        }];
                }
                ChartsComponent.prototype.ngAfterViewInit = function () {
                    this.renderChart();
                    this.renderPie();
                };
                ChartsComponent.prototype.renderChart = function () {
                    jQuery('#chartcontainer').highcharts({
                        chart: {
                            type: 'area'
                        },
                        title: {
                            text: 'FileSentinel Transfer Charts'
                        },
                        subtitle: {
                            text: 'Source: thebulletin.metapress.com'
                        },
                        xAxis: {
                            allowDecimals: false,
                            labels: {
                                formatter: function () {
                                    return this.value;
                                }
                            }
                        },
                        yAxis: {
                            title: {
                                text: 'File Size'
                            },
                            labels: {
                                formatter: function () {
                                    return this.value / 1000 + 'k';
                                }
                            }
                        },
                        tooltip: {
                            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
                                '<br/>dollars in {point.x}'
                        },
                        plotOptions: {
                            area: {
                                pointStart: 1940,
                                marker: {
                                    enabled: false,
                                    symbol: 'circle',
                                    radius: 2,
                                    states: {
                                        hover: {
                                            enabled: true
                                        }
                                    }
                                }
                            }
                        },
                        series: this.data
                    });
                };
                ChartsComponent.prototype.renderPie = function () {
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
                };
                ChartsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Log Charts</h1>\n\t\t<table>\n\t\t<tr>\n        <td>\n\t\t<div style=\"width:40%\" id=\"chartcontainer\"></div>\n\t\t</td>\n\t\t<td>\n\t\t<div style=\"width:60%\" id=\"piecontainer\"></div>\n\t\t</td>\n\t\t</tr>\n\t\t</table>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartsComponent);
                return ChartsComponent;
            }());
            exports_1("ChartsComponent", ChartsComponent);
        }
    }
});
//# sourceMappingURL=charts.component.js.map