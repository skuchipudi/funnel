import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ClientRegistrationService} from './client.registration.service';
import {ClientRegistrationModel} from './client.registration.model';

import {NgForm} from  '@angular/forms';

@Component({
    templateUrl: '/app/client-registration/client.registration.component.html',
    providers: [ClientRegistrationService]
})

export class ClientRegistrationComponent {

    private _clientRegistrationModel: ClientRegistrationModel;


    // TODO: populate this later using a Service
    public languages = ['maker_bank', 'euro_banc', 'bank_usa'];

    constructor (private _router: Router, private _registrationService: ClientRegistrationService )
    {
        this._clientRegistrationModel = new ClientRegistrationModel();
        
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