import {Component} from '@angular/core';
import {ClientRegistrationService} from './client.registration.service';
import {ClientRegistrationModel} from './client.registration.model';
import { PartnerServices} from '../partners/partner.services';
import {Partner} from '../partner-detail/partner.detail';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {NgForm} from  '@angular/forms';

@Component({
    templateUrl: '/app/client-registration/client.registration.component.html',
    providers: [ClientRegistrationService,  PartnerServices]
 
})

export class ClientRegistrationComponent {

    private _clientRegistrationModel: ClientRegistrationModel;
    private _subscription;
    private _partners;
    private _isLoading =true;

    // TODO: populate this later using a Service
    private languages: any;

    constructor ( private _router: Router, 
                  private _activatedRoute: ActivatedRoute,
                  private _registrationService: ClientRegistrationService,
                  private _partnerService: PartnerServices )
    {
        this._clientRegistrationModel = new ClientRegistrationModel();
    }

    ngOnInit() {
           console.log('ClientRegistration. ngOnit() called');
           this._subscription = this._activatedRoute.params.subscribe((params: Params) => {
            this._partnerService.getEntries().
                subscribe(partners => {
                    this._isLoading = false;
                    this._partners = partners;
                 } );
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