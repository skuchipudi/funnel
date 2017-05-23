import {Component, OnInit} from '@angular/core';
import { MapsChartsService} from '../charts/mapschart.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgForm} from  '@angular/forms';

declare var jQuery:any;
declare var Highcharts:any;

@Component({
    templateUrl: '/app/maps/maps.component.html',
    providers: [MapsChartsService]
})

export class MapsComponent  implements OnInit {

     // 
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
     
   ngOnInit() {
       this._mapsChartsService.renderChart(this.data1);
   }     

    constructor( 
        private _router: Router,
        private _mapsChartsService: MapsChartsService
    ){

    }

}