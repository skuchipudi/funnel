import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ClientRegistrationModel} from './client.registration.model';



//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class ClientRegistrationService {
    private _create_partner_client_registration_url  =
       "http://localhost:8080/partnerservices/addclient/";

    private _partner_url =
         'http://localhost:8080/partnerservices/entries/';

    constructor(private _http: Http){}

     createRegistration(_clientRegistrationModel: ClientRegistrationModel)
    {
        console.log('createRegistration ENTER');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let clientRegistrationInfoJSON = JSON.stringify(_clientRegistrationModel);
        console.log("createClientRegistration()=>"+ clientRegistrationInfoJSON);
       return this._http.post(this._create_partner_client_registration_url, clientRegistrationInfoJSON, options)
                     .map((response:Response) => response.json())
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


    getPartnerList() {
        return this._http.get(this._partner_url)
            .map(res => res.json());
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

