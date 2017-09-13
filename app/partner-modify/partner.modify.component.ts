import {Component, OnInit} from '@angular/core';
import {PartnerModifyServices} from '../partner-modify/partner.modify.services';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {Partner} from  '../partner-detail/partner.detail';

@Component({
   templateUrl: '/app/partner-modify/partner.modify.component.html',
     providers: [PartnerModifyServices]
 })

export class PartnerModifyComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partner: any;
    private _partnerId: string;

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerModifyServices:  PartnerModifyServices
            ) { }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'PartnerModifyComponent().partnerId =>' + params['partnerId']);
             this._partnerId = params['partnerId'];
             this._partnerModifyServices.getPartnerModifyServices( params['partnerId']).
                 subscribe(partner => {
                  this._isLoading = false;
                  this._partner = partner;
                 });
            });
    }
}


