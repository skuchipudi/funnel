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

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Partner} from '../models/partner.model';
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