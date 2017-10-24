import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';



@Component({
   templateUrl: '/app/partner-delete/partner.delete.component.html',
     providers: [PartnerDetailServices]
 })

export class PartnerDeleteComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partnerId: string;
    private _partner: any;        
    

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices
            ) { 
                this._partner = new Partner();
            }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'PartnerDeleteComoponent().partnerId =>' + params['partnerId']);
            this._partnerId = params['partnerId'];
             this._partnerDetailServices.getPartnerDetailsByPartnerId(this._partnerId).
                 subscribe(partner => {
                     this._isLoading = false;
                     this._partner = partner[0];
                 });
            });
    }
      
}
