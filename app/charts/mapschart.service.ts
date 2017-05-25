import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var Highcharts: any;

@Injectable()
export class MapsChartsService {


renderChart( data ) {
		jQuery('#mapcontainer').highcharts('Map',
        {
            title : {
              text : 'DataMap'
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
}
}




