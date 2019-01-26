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

