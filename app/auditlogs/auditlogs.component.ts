import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../partner-registration/partner.registration.info';
import {NgForm} from  '@angular/forms';


@Component({
   templateUrl: '/app/auditlogs/auditlogs.component.html',
     providers: [PartnerDetailServices]
 })

export class AuditLogComponent  implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _clients: any;
    private _activatedRoute: ActivatedRoute;
    private _partnerId: string;
    constructor (
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices
             ) { 
                 this._partnerId="maker_bank";
             }

     ngOnInit() {
        console.log('Audit Component.ngOnInit() - ENTER');
        this._partnerDetailServices.getClients(this._partnerId).
                subscribe(clients => {
                  this._clients=clients;
                  this._isLoading = false;
                 })
     }
     onSubmit(form: NgForm) {
        console.log('Audit Component.onSubmit() - ENTER');
        console.log("form value " + form.value.name);
         this._partnerDetailServices.getClients(this._partnerId).
                subscribe(clients => {
                  this._clients=clients;
          })
       

    }
}



