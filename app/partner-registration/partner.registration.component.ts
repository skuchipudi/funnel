import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {PartnerRegistrationService} from './partner.registration.service';

import {PartnerRegistrationInfo} from './partner.registration.info';
import {Token} from './token';
import {EmailAddress} from './partner.registration.emailaddress';

@Component({
    templateUrl: '/app/partner-registration/partner.registration.component.html',
    providers: [PartnerRegistrationService]
})

export class PartnerRegistrationComponent {
    private _partnerRegistrationInfo: PartnerRegistrationInfo;

   constructor (private _router: Router,  private _registrationService: PartnerRegistrationService ){
       this._partnerRegistrationInfo =  new PartnerRegistrationInfo();
       this._partnerRegistrationInfo.partnerName = "Partner Name";
       this._partnerRegistrationInfo.phoneNumber = "Phone Number";
       this._partnerRegistrationInfo.emailAddress = new EmailAddress("heroes@hero.com");
       // TODO - Need to auto generate
       this._partnerRegistrationInfo.partnerId = "partnerId";
       this._partnerRegistrationInfo.partnerDescription = "Partner Description";
    }

    onSubmit() {
        console.log('PartnerRegistration.onSubmit() - ENTER');
        //this._router.navigate (['RegistrationDetail']);
        console.log ('Partner Name  ==> ' +  this._partnerRegistrationInfo.partnerName);
        console.log ('Partner Id ==> ' +  this._partnerRegistrationInfo.partnerId);
        console.log ('Partner Description ==> ' +  this._partnerRegistrationInfo.partnerDescription);
        this._registrationService.createRegistration(this._partnerRegistrationInfo).subscribe(registrationInfo => {
            return this._partnerRegistrationInfo = registrationInfo;
        });
        console.log('PartnerRegistration.onSubmit() - EXIT');
        //this._router.navigate (['partners']);
       // post to the webservice
    }

/*
     onSubmit(form:any) {
        let regInfo = this.makeRegistrationInfo(form);
        this._registrationService.createRegistration(regInfo)
            .subscribe (registration => {
                this._registration = registration;
        });

        this._router.navigate (['RegistrationDetail']);
    }
    */

  
}
