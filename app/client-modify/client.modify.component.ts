/*
 *  Copyright 2019  Sunil S. Kuchipudi	
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */

import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';
import {ClientModifyServices} from '../client-modify/client.modify.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
import {Client} from '../models/client.model';
import {ClientWrapperModel} from '../models/client.wrapper.model';

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
    private _clientModifyInfo: ClientWrapperModel;

    constructor (
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _partnerDetailServices: PartnerDetailServices,
        private _clientModifyServices: ClientModifyServices
    ) { 
               this._partner = new Partner();
               this._client  = new Client();
               this._clientModifyInfo = new ClientWrapperModel();
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
        console.log ("client modify form  =>" + clientModifyForm);

        this._clientModifyInfo.partnerId = this._partner.partnerId;
        this._clientModifyInfo.client = this._client
        
          this._clientModifyServices.modifyClient(this._clientModifyInfo).
        subscribe(client => {
            this._client = client;
            this._router.navigate(['/partners']);
        });
    }
}