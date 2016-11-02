import {Component, OnInit} from '@angular/core';
import {AuditLoggerService} from './auditlogger.service';

@Component({
    template: `
        <h1>Partner List</h1>
         <div>
         <i *ngIf="_isLoading"  class="fa fa-spinner fa-spin fa-3x"></i>
         </div>
         <table class="table table-striped table-hover ">
         <thead>
            <tr>
             <th>Partner Id</th>
             <th>User Id</th>
             <th>*Sender</th>
             <th>*Receiver</th>
             <th>Log Event</th>
             <th>Time Stamp</th>
            <th>*Status</th>
            </tr>
         </thead>
        <tbody>
            <tr *ngFor = "let auditlog of _auditlogs">
              <a [routerLink]="['/auditdetail',{id:auditlog.partnerId}]">
              <td>{{auditlog.partnerId}}</td></a>
              <td>{{auditlog.userId}}</td>
              <td> Sender*</td>
              <td> Receiver*</td>
              <td>{{auditlog.logEvent}}</td>
              <td>{{auditlog.timeStamp}}</td>
              <td>PASS*</td>
            </tr>
        </tbody>
        </table>  
        `,
   })
export class AuditLogComponent implements OnInit {
    _isLoading = true;
    _auditlogs: any;

    constructor(
    private _auditLoggerService: AuditLoggerService)
    {  

    }
    
    
    ngOnInit(){
       // this._auditdetails = this._photoService.getAlbums();
       // this._isLoading = false;
        this._auditLoggerService.getAuditLogs()
            .subscribe(auditlogs => {
                this._isLoading = false;
                this._auditlogs = auditlogs;
            });
    }
}