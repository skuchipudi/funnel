import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {ClientModifyServices} from '../client-modify/client.modify.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
import {Client} from '../models/client.model';

//import {Partner} from '../partner-detail/partner.detail';

import {NgForm} from  '@angular/forms';



@Component({
   templateUrl: '/app/client-modify/client.modify.component.html',
     providers: [PartnerDetailServices, ClientModifyServices]
 })

export class ClientModifyComponent implements OnInit {
    private _isLoading = true;

    // for some reason if you make this
    // model part of the constructor this results in errors
    private _partner: Partner;
    private _client: Client;

    constructor (
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _partnerDetailServices: PartnerDetailServices,
        private _clientModifyServices: ClientModifyServices
    ) { 
               this._partner = new Partner();
               this._client  = new Client();
      }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'ClientModifyComponent().partnerId =>' + params['partnerId']);
            console.log( 'ClientModifyComponent().client =>' + params['clientId']);


            this._partnerDetailServices.getPartnerDetailsByPartnerId(params['partnerId'])
            .subscribe(partners => {
                this._isLoading = false;
                // because what is returned is any array
                // just take the first element
                this._partner = partners[0];
            });

            // 
            this._partnerDetailServices.getClientForPartnerByClientId(params['partnerId'], params['clientId'])
            .subscribe (client => {
                this._isLoading = false;
                this._client = client;
            });
        });
    }

    onSubmit(clientModifyForm: NgForm) {
        console.log ("partner modify form " + clientModifyForm;
        // This is a asynch call so you need to make sure
        // to put the navigation within the promise
       
    
    }
}