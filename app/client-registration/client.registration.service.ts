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

import {ClientWrapperModel} from '../models/client.wrapper.model';



//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class ClientRegistrationService {
    private _create_partner_client_registration_url  =
       "http://localhost:8080/partnerservices/addclient/";

    private _partner_url =
         'http://localhost:8080/partnerservices/entries/';

    constructor(private _http: Http){}

     createRegistration(_clientRegistrationModel: ClientWrapperModel)
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

