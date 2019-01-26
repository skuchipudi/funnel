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
