import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {PartnerRegistrationInfo} from './partner.registration.info';


//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class PartnerRegistrationService {
    private _create_partner_registration_url  =
        "http://localhost:8080/partnerservices/create/";


    constructor(private _http: Http){}


    createRegistration(registrationInfo: PartnerRegistrationInfo)
    {
        console.log('createRegistration invoked!');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let registrationInfoJSON = JSON.stringify(registrationInfo);
        return this._http.post(this._create_partner_registration_url, registrationInfoJSON, options)
                     .map((response:Response) => response.json())
                     .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}