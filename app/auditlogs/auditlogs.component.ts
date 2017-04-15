import {Component, OnInit} from '@angular/core';
import {AuditLogsService} from './auditlogs.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../partner-registration/partner.registration.info';
import {NgForm} from  '@angular/forms';


@Component({
   templateUrl: '/app/auditlogs/auditlogs.component.html',
     providers: [AuditLogsService]
 })

export class AuditLogComponent  implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _entries: any;
    private _activatedRoute: ActivatedRoute;
    private _partnerId: string;
    private _clientId: string;

    constructor (
            private _router: Router,
            private _auditLogService:  AuditLogsService
             ) { 
                 // TODO - Change this
                 this._partnerId="maker_bank";
                 this._clientId="guardian_client_id";
             }

     ngOnInit() {
        console.log('Audit Component.ngOnInit() - ENTER');
       // this._auditLogService.getTable( this._partnerId, this._clientId);

       this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
                subscribe(entries => {
                  this._entries=entries;
                  this._isLoading = false;
                 })
       
     }

     onSubmit(form: NgForm) {
        console.log('Audit Component.onSubmit() - ENTER');
        console.log("form value " + form.value.name);
        //this._auditLogService.getTable( this._partnerId, this._clientId);

       // Use this if you want to use the Angular2 paradigm
       this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
                subscribe(entries => {
                  this._entries=entries;
                  this._isLoading = false;
                })
    }
}



