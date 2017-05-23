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
var MapsComponent = (function () {
    function MapsComponent() {
        //   data1 = [
        //        ['eu', 0],
        //        ['oc', 1],
        //        ['af', 2],
        //        ['as', 3],
        //        ['na', 4],
        //        ['sa', 5]
        //  ]
        // make this a service
        this.data1 = [{
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
    MapsComponent.prototype.ngAfterViewInit = function () {
        this.renderMap();
    };
    MapsComponent.prototype.renderMap = function () {
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
                }
            },
            colorAxis: {
                min: 1
            },
            // series: [{
            //     data: [],
            //     name: 'Data Drop',
            //     states: {
            //         hover: {
            //         color: '#BADA55'
            //     }
            // },
            series: [{
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
                    data: this.data1
                }]
        });
    };
    MapsComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/maps/maps.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MapsComponent);
    return MapsComponent;
}());
exports.MapsComponent = MapsComponent;
//# sourceMappingURL=maps.component.service.js.map