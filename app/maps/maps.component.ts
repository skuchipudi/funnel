import {Component, OnInit} from '@angular/core';


declare var jQuery:any;
declare var Highcharts:any;

@Component({
    template: `
        <h1>Map</h1>
        This maps the flow of file data across locations and geo-graphical countries.This enables you to understand
        not only where you data is going but what locations and countries are consuming that data. As an example,
        this will help address cross border implications of sharing data 
        <div id="mapcontainer" style="height: 600px; min-width: 610px; max-width: 800px; margin: 0 auto"></div> 
         <!--  <div id="googlemaps" style="width: 900px; height: 300px;"></div>   -->
        `,
 })

export class MapsComponent { 
      
    //   data1 = [
    //        ['eu', 0],
    //        ['oc', 1],
    //        ['af', 2],
    //        ['as', 3],
    //        ['na', 4],
    //        ['sa', 5]
    //  ]
    // make this a service
    data1 =  [{
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
        }
        {
            name: 'Beijing',
            lat: 39.9042,
            lon: 116.4074
        }
        {
            name: 'New York',
            lat: 40.7128,
            lon: -74.0059
        }
     ]

    ngAfterViewInit() {
     	 this.renderMap();
    }

    renderMap()
    {
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
             }
    
        } 
    }
}