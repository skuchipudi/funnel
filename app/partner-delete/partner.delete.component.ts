import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../partner-detail/partner.detail';



@Component({
   templateUrl: '/app/partner-delete/partner.delete.component.html',
     providers: [PartnerDetailServices]
 })

export class PartnerDeleteComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partners: any;
    private _partnerId: string;


    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices
            ) { }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'PartnerDetailComponent().partnerId =>' + params['partnerId']);
             this._partnerId = params['partnerId'];
             this._partnerDetailServices.getPartnerDetailsByPartnerId( params['partnerId']).
                 subscribe(partners => {
                     this._isLoading = false;
                     this._partners = partners;
                 } );
 
         });

        }
    }