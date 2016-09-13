import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuditLoggerService} from './auditlogger.service';
import {AuditDetail} from './AuditDetail';
@Component({
    template: `
        <h1>Log Details</h1>
        <div *ngIf="_isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>  
        <table class="table table-striped table-hover ">
         <thead>
            <tr>
             <th>Partner Id</th>
             <th>User Id</th>
             <th>Log Event</th>
             <th>Time Stamp</th>
             <th>Origin IP Address</th>
             <th>Destination IP Address</th>
            </tr>
         </thead>
         <tbody>
          <tr *ngFor = "#detail of _auditDetail">
                <td>{{detail.partnerId}}</td> 
                <td>{{detail.userId}}</td> 
                <td>{{detail.logEvent}}</td> 
                <td>{{detail.timeStamp}}</td>  
                <td>{{detail.originIPAddress}}</td>  
                <td>{{detail.destinationIPaddress}}</td>  
            </tr>
        </tbody>
        </table>
        `,
    providers: [AuditLoggerService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AuditDetailComponent implements OnInit {
    _isLoading = true;
    _auditDetail:AuditDetail;

    constructor(
            private _auditLoggerService: AuditLoggerService, 
            private _routeParms: RouteParams){
    }
    
    /*ngOnInit(){
        this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
            subscribe(detail => {
                this._isLoading = false;
                this._auditDetail = detail;
            });      
    }
    */
    ngOnInit(){
        this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
            subscribe(auditDetail => {
                this._isLoading = false;
                this._auditDetail = auditDetail;
        } );
    }      
}