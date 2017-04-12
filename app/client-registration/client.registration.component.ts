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

    private _model: ClientRegistrationModel;
    // TODO: populate this later using a Service
    public languages = ['maker_bank', 'euro_banc', 'bank_usa'];


    constructor (private _router: Router )
    { 
        this._model = new ClientRegistrationModel;

    }


    onSubmit(clientForm: NgForm) {
        console.log('Client Registration.onSubmit() - ENTER');
        console.log('Client Registration.onSubmit() - EXIT');
    }


}