import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PartnerModel} from '../partner-modify/partner.modify.info';



@Component({
   templateUrl: '/app/partner-delete/partner.delete.component.html',
     providers: []
 })

export class PartnerModifyComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partner: any;
    private _partnerId: string;
    

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _model: PartnerModel

            ) { 
                this._model = new PartnerModel();
            }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'PartnerModifyComponent().partnerId =>' + params['partnerId']);
            this._partnerId = params['partnerId'];
           
      });
    }
}