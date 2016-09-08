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
    var MapsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MapsComponent = (function () {
                function MapsComponent() {
                    this.data = [
                        {
                            "hc-key": "gl",
                            "value": 0
                        },
                        {
                            "hc-key": "lc",
                            "value": 1
                        },
                        {
                            "hc-key": "um",
                            "value": 2
                        },
                        {
                            "hc-key": "us",
                            "value": 3
                        },
                        {
                            "hc-key": "vi",
                            "value": 4
                        },
                        {
                            "hc-key": "ca",
                            "value": 5
                        },
                        {
                            "hc-key": "cu",
                            "value": 6
                        },
                        {
                            "hc-key": "kn",
                            "value": 7
                        },
                        {
                            "hc-key": "gd",
                            "value": 8
                        },
                        {
                            "hc-key": "dm",
                            "value": 9
                        },
                        {
                            "hc-key": "ag",
                            "value": 10
                        },
                        {
                            "hc-key": "tt",
                            "value": 11
                        },
                        {
                            "hc-key": "sw",
                            "value": 12
                        },
                        {
                            "hc-key": "bb",
                            "value": 13
                        },
                        {
                            "hc-key": "jm",
                            "value": 14
                        },
                        {
                            "hc-key": "bu",
                            "value": 15
                        },
                        {
                            "hc-key": "bs",
                            "value": 16
                        },
                        {
                            "hc-key": "vc",
                            "value": 17
                        },
                        {
                            "hc-key": "ht",
                            "value": 18
                        },
                        {
                            "hc-key": "do",
                            "value": 19
                        },
                        {
                            "hc-key": "mx",
                            "value": 20
                        },
                        {
                            "hc-key": "pr",
                            "value": 21
                        }
                    ];
                }
                MapsComponent.prototype.ngAfterViewInit = function () {
                    this.renderMap();
                };
                MapsComponent.prototype.renderMap = function () {
                    jQuery('#mapcontainer').highcharts('Map', {
                        title: {
                            text: 'Highmaps basic demo'
                        },
                        subtitle: {
                            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/north-america.js">North America</a>'
                        },
                        mapNavigation: {
                            enabled: true,
                            buttonOptions: {
                                verticalAlign: 'bottom'
                            }
                        },
                        colorAxis: {
                            min: 0
                        },
                        series: [{
                                data: this.data,
                                mapData: Highcharts.maps['custom/north-america'],
                                joinBy: 'hc-key',
                                name: 'Random data',
                                states: {
                                    hover: {
                                        color: '#BADA55'
                                    }
                                },
                                dataLabels: {
                                    enabled: true,
                                    format: '{point.name}'
                                }
                            }]
                    });
                };
                MapsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Map</h1>\n        <div id=\"mapcontainer\" style=\"height: 800px; min-width: 610px; max-width: 800px; margin: 0 auto\"></div>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MapsComponent);
                return MapsComponent;
            }());
            exports_1("MapsComponent", MapsComponent);
        }
    }
});
//# sourceMappingURL=maps.component.js.map