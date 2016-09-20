import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {RegistrationService} from './registration.service';

import {RegistrationInfo} from './registrationinfo';
import {Token} from './token';

@Component({
    templateUrl: '/app/registration.component.html',
    providers: [RegistrationService, HTTP_PROVIDERS]
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
            registrationInfo.partnerId = form.value.partnerdescription; 
            return registrationInfo;
    }
  
}


       