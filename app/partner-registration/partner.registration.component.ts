import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {PartnerRegistrationService} from './partner.registration.service';

import {PartnerRegistrationInfo} from './partner.registration.info';
import {Token} from './token';

@Component({
    templateUrl: '/app/partner-registration/partner.registration.component.html',
    providers: [PartnerRegistrationService]
})

export class PartnerRegistrationComponent {
    private _partnerRegistrationInfo: PartnerRegistrationInfo;
    

   constructor (private _router: Router,  private _registrationService: PartnerRegistrationService ){
       this._partnerRegistrationInfo =  new PartnerRegistrationInfo();
       this._partnerRegistrationInfo.partnerId = "partnerId";
       this._partnerRegistrationInfo.partnerName = "Partner Name";
       this._partnerRegistrationInfo.partnerDescription = "Partner Description";
    }


    onSubmit() {
        console.log('PartnerRegistration.onSubmit()');
        //this._router.navigate (['RegistrationDetail']);
        console.log ('Partner Name  ==> ' +  this._partnerRegistrationInfo.partnerName);
        console.log ('Partner Id ==> ' +  this._partnerRegistrationInfo.partnerId);
        console.log ('Partner Description ==> ' +  this._partnerRegistrationInfo.partnerDescription);
       // console.log ('f.name ==> ' + form.value.name);
       //  this._router.navigate (['partners']);
    }

    addHero()
    {
        console.log('PartnerRegistration.addHero() called');
        console.log ('Partner Name  ==> ' +  this._partnerRegistrationInfo.partnerName);
        console.log ('Partner Id ==> ' +  this._partnerRegistrationInfo.partnerId);
        console.log ('Partner Description ==> ' +  this._partnerRegistrationInfo.partnerDescription);

    }

}
