import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class ClientRegistrationService {
    private _create_partner_registration_url  =
       "http://localhost:8080/partnerservices/create/";

    private _url =  "http://localhost:8080/partnerservices/entries/";

    constructor(private _http: Http){}

    createRegistration(r)
    {

    }
}