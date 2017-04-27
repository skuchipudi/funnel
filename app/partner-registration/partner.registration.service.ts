import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Partner} from './partner.registration.info';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services'


//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class PartnerRegistrationService {
    private _create_partner_registration_url  =
       "http://localhost:8080/partnerservices/create/";

    private _url =  "http://localhost:8080/partnerservices/entries/";

    constructor(private _http: Http){}

    createRegistration(registrationInfo: Partner)
    {
        console.log('createRegistration ENTER');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let registrationInfoJSON = JSON.stringify(registrationInfo);
        console.log("createRegistration()=>"+ registrationInfoJSON);

        return this._http.post(this._create_partner_registration_url, registrationInfoJSON, options)
                     .map((response:Response) => response.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }
    
    private handleError(error: Response) {
        console.error("handleError()" + error);
        return Observable.throw(error.json().error || 'Server error');
    }

     private extractData(res: Response) {
        let body = res.json();
        console.log('extractData=>' + body);
        return body.data || { };
     }
}