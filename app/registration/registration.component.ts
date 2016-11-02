import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {RegistrationService} from './registration.service';

import {RegistrationInfo} from './registrationinfo';
import {Token} from './token';

@Component({
    templateUrl: '/app/registration/registration.component.html',
    providers: [RegistrationService]
})

export class RegistrationComponent {
   
   private _registration : RegistrationInfo;
    
   constructor (private _router: Router,  private _registrationService: RegistrationService ){
    }
    
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
            let registrationInfo = new RegistrationInfo(token);
            registrationInfo.serverAddress = form.value.serveraddress;
            registrationInfo.localFilePath = form.value.localfilepath;
            registrationInfo.remoteFilePath = form.value.remotefilepath;
            registrationInfo.userId = form.value.serveruserid;
            registrationInfo.password = form.value.serverpassword;
            registrationInfo.filename = form.value.filename;
            // TODO - this should be auto created
            registrationInfo.partnerId = form.value.partnerId; 
            registrationInfo.partnerName = form.value.partnername;
            registrationInfo.partnerDescription = form.value.partnerdescription;
            return registrationInfo;
    }
  
}


       