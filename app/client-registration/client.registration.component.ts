import {Component} from '@angular/core';
import {ClientRegistrationService} from './client.registration.service';
import {ClientRegistrationModel} from './client.registration.model';
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

    private _clientRegistrationModel: ClientRegistrationModel;
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
        this._clientRegistrationModel = new ClientRegistrationModel();
        this._partner = new Partner();
    }

    ngOnInit() {
           console.log('ClientRegistration. ngOnit() called');
     }

      validatePartnerId(partnerId:any)
    {
        console.log("validatePartnerId called=> " + partnerId.value);
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