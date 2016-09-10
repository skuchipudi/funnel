import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';


declare var jQuery:any;
declare var Highcharts:any;

@Component({
    template: `
        <h1>Map</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        <div id="mapcontainer" style="height: 600px; min-width: 610px; max-width: 800px; margin: 0 auto"></div>
        `,
    directives: [ROUTER_DIRECTIVES]
})

export class MapsComponent { 
    
	private data = [
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

 
    ngAfterViewInit() {
     	this.renderMap();
    }
 
    renderMap(){  
    	jQuery('#mapcontainer').highcharts('Map',
        {
            title : {
            text : 'File Transfers'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world.js">World</a>'
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

        series : [{
            data : this.data,
           // mapData: Highcharts.maps['custom/north-america'],
            mapData: Highcharts.maps['custom/world'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            }
        }]
    
              
        });
    }
}