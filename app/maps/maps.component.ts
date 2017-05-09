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
    ]
    

    ngAfterViewInit() {
     	 this.renderMap();
       //  this.renderGoogleMap();
         
    }
    

    renderGoogleMap()
    {
        jQuery('#googlemaps').googleMap({
            zoom: 100,
            type: "TERRAIN"

        });
        jQuery('#googlemaps').addMarker(
        {
                coords: [48.895651, 2.290569], // Map center (optional)        
        });

        jQuery('#googlemaps').addMarker(
        {
                coords:  [48.869439, 2.308664], // Map center (optional)
                
        });
        jQuery('#googlemaps').addMarker(
        {
                coords:  [30.3322, -81.6557], // Map center (optional)
                
        });
        //{
        //  zoom: 10, // Initial zoom level (optional)
        //  coords: [48.895651, 2.290569], // Map center (optional)
        //  type: "TERRAIN", // Map type (optional)
        //  id: 'marker1' ,
        //  market: 'marker'
        //}); 
    }

 
    renderMap(){  
    	jQuery('#mapcontainer').highcharts('Map',
        {
            title : {
              text : 'File Transfers'
            },
        
            //subtitle : {
            //text : 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world.js">World</a>'
            //},
            
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
                    
                    
                 chart: {
                    borderWidth: 1,
                    borderColor: 'silver',
                    borderRadius: 3,
                    shadow: true
                },

                dataLabels: {
                    enabled: true,
                    format: '{point.data}'
                }
            }]      
        });
    }
}