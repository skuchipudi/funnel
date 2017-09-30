import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
//import {PartnerModel} from '../partner-modify/partner.modify.info';
import {Partner} from '../partner-detail/partner.detail';

import {NgForm} from  '@angular/forms';



@Component({
   templateUrl: '/app/partner-modify/partner.modify.component.html',
     providers: [PartnerDetailServices]
 })

export class PartnerModifyComponent implements OnInit {
    private _isLoading = true;

    // for some reason if you make this
    // model part of the constructor this results in errors
    private _model: any;
    
    constructor (
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _partnerDetailServices: PartnerDetailServices
    ) { 
               this._model = new Partner();
      }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'PartnerModifyComponent().partnerId =>' + params['partnerId']);
            this._partnerDetailServices.getPartnerDetailsByPartnerId(params['partnerId']).
            subscribe(partners => {
                this._isLoading = false;
                // because what is returned is any array
                // just take the first element
                this._model = partners[0];
             
            });
          
      });
    }

    onSubmit(partnermodifyform: NgForm) {
        console.log ("partner modify form " + partnermodifyform);

    }
}