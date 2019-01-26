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
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
import {Client} from '../models/client.model';


@Component({
   templateUrl: '/app/client-delete/client.delete.component.html',
     providers: [PartnerDetailServices]
 })

export class ClientDeleteComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partnerId: string;
    private _clientId: string;
    private _partner: any;        
    private _client:any;
    

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices
            ) { 
                this._partner = new Partner();
                this._client = new Client();
            }

    ngOnInit() {
        this._activatedRoute.params.subscribe((params: Params) => {
            console.log( 'ClientDeleteComponent().partnerId =>' + params['partnerId']);
            this._partnerId = params['partnerId'];
            this._clientId = params['clientId'];
         
 
        this._partnerDetailServices.getPartnerDetailsByPartnerId(params['partnerId'])
            .subscribe(partners => {
                this._isLoading = false;
                // because what is returned is any array
                // just take the first element
                this._partner = partners[0];
            });

        this._partnerDetailServices.getClientForPartnerByClientId(params['partnerId'], params['clientId'])
             .subscribe (client => {
                 this._isLoading = false;
                this._client = client;
            });

       });

    }

}
