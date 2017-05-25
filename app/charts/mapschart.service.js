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
var MapsChartsService = (function () {
    function MapsChartsService() {
    }
    MapsChartsService.prototype.renderChart = function (data) {
        jQuery('#mapcontainer').highcharts('Map', {
            title: {
                text: 'DataMap'
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
            },
            chart: {
                map: 'custom/world-continents'
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                },
            },
            colorAxis: {
                min: 1
            },
            series: [
                {
                    // Use the gb-all map with no data as a basemap
                    // mapData: Highcharts.maps['countries/gb/gb-all'],
                    mapData: Highcharts.maps['custom/world-continents'],
                    name: 'Basemap',
                    borderColor: '#A0A0A0',
                    nullColor: 'rgba(200, 200, 200, 0.3)',
                    showInLegend: false
                },
                {
                    name: 'Separators',
                    type: 'mapline',
                    //data: Highcharts.geojson(Highcharts.maps['countries/gb/gb-all'], 'mapline'),
                    data: Highcharts.geojson(Highcharts.maps['custom/world-continents'], 'mapline'),
                    color: '#707070',
                    showInLegend: false,
                    enableMouseTracking: true
                },
                {
                    // Specify points using lat/lon
                    type: 'mappoint',
                    name: 'Cities',
                    color: Highcharts.getOptions().colors[1],
                    data: data
                },
            ]
        });
    };
    MapsChartsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapsChartsService);
    return MapsChartsService;
}());
exports.MapsChartsService = MapsChartsService;
//# sourceMappingURL=mapschart.service.js.map