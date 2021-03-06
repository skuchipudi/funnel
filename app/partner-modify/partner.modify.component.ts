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
import {PartnerModifyServices} from '../partner-modify/partner.modify.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
//import {Partner} from '../partner-detail/partner.detail';

import {NgForm} from  '@angular/forms';



@Component({
   templateUrl: '/app/partner-modify/partner.modify.component.html',
     providers: [PartnerDetailServices, PartnerModifyServices]
 })

export class PartnerModifyComponent implements OnInit {
    private _isLoading = true;

    // for some reason if you make this
    // model part of the constructor this results in errors
    private _model: Partner;
    
    constructor (
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _partnerDetailServices: PartnerDetailServices,
        private _partnerModifyServices: PartnerModifyServices
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
        // This is a asynch call so you need to make sure
        // to pu the navigation within the promise
        this._partnerModifyServices.modifyPartner(this._model).
              subscribe(partner => {
                  this._model = partner;
                  this._router.navigate(['/partners']);
                });
    
    }
}