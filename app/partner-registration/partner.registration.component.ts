import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PartnerRegistrationService} from './partner.registration.service';
import {Partner} from './partner.registration.info';
import {Token} from './token';
import {EmailAddress} from './partner.registration.emailaddress';
import {Client} from './partner.registration.client';
import {NgForm} from  '@angular/forms';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services'


@Component({
    templateUrl: '/app/partner-registration/partner.registration.component.html',
    providers: [PartnerRegistrationService, PartnerDetailServices]
})

export class PartnerRegistrationComponent {
    private _partnerRegistrationInfo: Partner;
    private _partnerAlreadyExists = false;
    
   constructor (private _router: Router,  
                private _registrationService: PartnerRegistrationService,
                private _partnerDetailService: PartnerDetailServices)
   {

      this._partnerRegistrationInfo = new Partner();
      this._partnerRegistrationInfo.partnerDescription = "Partner Description";
    }

    validatePhoneNumber(phonenumber)
    {
        console.log("validatePhoneNumber called");
        // TODO write the function to validate
        //console.log('phonenumber.value=>' + phonenumber.value.length);
        // TODO add additional validations
        //if(phonenumber.value.length != 14){
        //    console.log("value true");
        this._partnerRegistrationInfo.hasPhoneNumberError = false;
     //} else
    }

    validatePartnerId(partnerId:any)
    {
        console.log("validatePartnerId called=> " + partnerId.value);
        // this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId.value).subscribe(partnerInfo =>  {
        //       this._partnerRegistrationInfo = partnerInfo; 
        //       this._partnerAlreadyExists  = true;

        // });
        this._partnerRegistrationInfo.partnerAlreadyExists  = false;
    }

    onSubmit(partnerForm: NgForm) {
       // console.log('PartnerRegistration.onSubmit() - ENTER');
        this._registrationService.createRegistration(this._partnerRegistrationInfo).subscribe(registrationInfo => {
            return this._partnerRegistrationInfo = registrationInfo;
        });
        this._router.navigate(['/partners']);
       //console.log('PartnerRegistration.onSubmit() - EXIT');
    }


}