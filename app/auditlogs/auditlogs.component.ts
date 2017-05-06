import {Component, OnInit} from '@angular/core';
import {AuditLogsService} from './auditlogs.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../partner-registration/partner.registration.info';
import {NgForm} from  '@angular/forms';
import {AreaChartService} from '../charts/areachart.service';
import {AuditEntry} from './auditentries.ts';

@Component({
   templateUrl: '/app/auditlogs/auditlogs.component.html',
     providers: [AuditLogsService, AreaChartService]
 })

export class AuditLogComponent  implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _entries : AuditEntry[];
    private _activatedRoute: ActivatedRoute;
    private _partnerId: string;
    private _clientId: string;
   // private _data: [ { data: number[][] }];
    private _data: any;
    //private _data  =  [ {  data: [  [3,4], [4,2], [ 6,6], [7,2],[ 10,2] ]} ]
    
    //    {  data: [ [ 2,2], [3,4], [4,2], [ 6,6], [7,2]] } ]
    // {
	//		 	name: 'Audit Log Time series',
			 	//data: [	1 , 15, 30, 23, 40, 100, 20, 12]
    //             data :  [ [ 1,2], [2,4], [3,2], [ 5.6], [6,2]]
                //  data: [ [Date.UTC(2010, 2, 1), 71.5], [Date.UTC(2010, 0, 1), 29.9],[Date.UTC(2010, 2, 1), 71.5], [Date.UTC(2010, 4, 1), 10.5]]
	//}];


    constructor (
            private _router: Router,
            private _auditLogService:  AuditLogsService,
            private _areaChartService: AreaChartService
             ) {
                 // TODO - Change this
                 this._partnerId="maker_bank_id";
                 this._clientId="guardian_client_id";
             }

      makeData()
      {
       // for ( let entry of this._entries){
        console.log("makeData() this._entries.length=>" + this._entries.length);
         let datam : number [][] = [];
         for ( let i in this._entries){
           //   console.log ("entries.logEntry =>" + this._entries[i].logEntry);
               let logEntryLength =     this._entries[i].logEntry.length;
               let auditTime =     this._entries[i].timeStamp;
               datam.push( [logEntryLength, auditTime.length]);
         }

         let name: string [] = new Array ("Audit Log Series");
         name.push( "Audit Log Series");
         datam.sort();
         this._data = [ { data: datam }, name];
     
    }

     ngOnInit() {
        console.log('Audit Component.ngOnInit() - ENTER');
       this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
                subscribe(entries => {
                  this._entries=entries;
                  this._isLoading = false;
                  // You have to call it here as this is an async operation
                  this.makeData();
                 });
            this._areaChartService.renderChart(this._data);

      }

     onSubmit(form: NgForm) {
        console.log('Audit Component.onSubmit() - ENTER');

       // Use this if you want to use the Angular2 paradigm
       this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
                subscribe(entries => {
                  this._entries=entries;
                  this._isLoading = false;
                  // make sure to call this here to populate the entries into the graph plot
                  this.makeData();
                });
       // call the webservice to populate the data
      this._areaChartService.renderChart(this._data);
    }
}



