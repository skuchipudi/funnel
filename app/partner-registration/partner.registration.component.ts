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
    private _registration: PartnerRegistrationInfo;

   constructor (private _router: Router,  private _registrationService: PartnerRegistrationService ){}

    onSubmit(form:any) {
        let regInfo = this.makeRegistrationInfo(form);
        this._registrationService.createRegistration(regInfo)
            .subscribe (registration => {
                this._registration = registration;
        });

        this._router.navigate (['RegistrationDetail']);
    }

    private  makeRegistrationInfo(form: any) {
           // return regInfo: RegistrationInfo;
            let token: Token  = new Token("secretKey", "status");
            let registrationInfo = new PartnerRegistrationInfo(token);
             // TODO - this should be auto created
            registrationInfo.partnerId = form.value.partnerid;
            console.log('form.value.partnerid =>' + form.value.partnerid);

            registrationInfo.partnerName = form.value.partnername;
            console.log('form.value.partnername =>' + form.value.partnername);

            registrationInfo.partnerDescription = form.value.partnerdescription;
            console.log('form.value.partnerdescription =>' + form.value.partnerdescription);

            return registrationInfo;
    }
}
