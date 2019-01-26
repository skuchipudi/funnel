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

import {Component} from '@angular/core';
import {ClientRegistrationService} from './client.registration.service';
import {ClientWrapperModel} from '../models/client.wrapper.model';
import { PartnerServices} from '../partners/partner.services';
import {Partner} from '../models/partner.model';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgForm} from  '@angular/forms';

import {PartnerDetailServices} from '../partner-detail/partner.detail.services'


@Component({
    templateUrl: '/app/client-registration/client.registration.component.html',
    providers: [ClientRegistrationService, PartnerDetailServices, PartnerServices]
 
})

export class ClientRegistrationComponent {

    private _clientRegistrationModel: ClientWrapperModel;
    private _subscription;
    private _partner;
    private _isLoading =true;
    private _partnerIdIsNotValid=false;
    private _latlng;
  
    // TODO: populate this later using a Service
    private languages: any;

    constructor ( private _router: Router, 
                  private _activatedRoute: ActivatedRoute,
                  private _registrationService: ClientRegistrationService,
                  private _partnerService: PartnerServices,
                  private _partnerDetailService: PartnerDetailServices
                  )
    {
        this._clientRegistrationModel = new ClientWrapperModel();
        this._partner = new Partner();
    }

    ngOnInit() {
           console.log('ClientRegistration. ngOnit() called');
     }

      validatePartnerId(partnerId:any)
    {
        //console.log("validatePartnerId called=> " + partnerId.value);
         this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId.value).subscribe(partnerInfo =>  {
               this._partner = partnerInfo[0];
               //console.log('partner returned  =>' + JSON.stringify(this._partner));
               //console.log('partnerid returned =>' + this._partner.partnerId);
               //if(partnerId.value == this._partner.partnerId)
               if(this._partner==null) 
                    this._partnerIdIsNotValid = true;
                else
                    this._partnerIdIsNotValid = false;
        });

    }

    onSubmit(clientForm: NgForm) {
         console.log('ClientRegistration.onSubmit() - ENTER');
        this._registrationService.createRegistration(this._clientRegistrationModel).subscribe(registrationInfo => {
            return this._clientRegistrationModel = registrationInfo;
       });
        this._router.navigate(['/partners']);
       console.log('ClientRegistration.onSubmit() - EXIT');

    }


}