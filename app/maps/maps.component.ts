import {Component, OnInit} from '@angular/core';
import { MapsChartsService} from '../charts/mapschart.service';
import {AuditLogsService} from '../auditlogs/auditlogs.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgForm} from  '@angular/forms';

declare var jQuery:any;
declare var Highcharts:any;

@Component({
    templateUrl: '/app/maps/maps.component.html',
    providers: [MapsChartsService, AuditLogsService]
})

export class MapsComponent  implements OnInit {
    private _isLoading = false;
    private _partnerId:string;
    private _clientId:string;
    private _entries:any;

     // 
     _data1 =  [{
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
       // TODO  - Get this from the form
       //this._auditLogService.getAuditLogsByPartnerAndClientID("partnerId", "clientId");
       this._mapsChartsService.renderChart(this._data1);
}

onSubmit(form: NgForm){
      this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
                subscribe(entries => {
                  this._entries=entries;
                  this._isLoading = false;
                  // make sure to call this here to populate the entries into the graph plot
                  this._mapsChartsService.renderChart(this._data1);
                });
    
}

    constructor( 
        private _router: Router,
        private _mapsChartsService: MapsChartsService,
        private _auditLogService: AuditLogsService
    ){ }

}