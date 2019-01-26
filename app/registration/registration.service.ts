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

import {RegistrationInfo} from './registrationinfo';


//https://scotch.io/tutorials/angular-2-http-requests-with-observables

@Injectable()
export class RegistrationService {
    private _create_registration_url  =
        "http://ec2-54-210-61-136.compute-1.amazonaws.com:8082/registrationentity/create/registrationInfo/";

    private _get_registration_url  =
        "http://ec2-54-210-61-136.compute-1.amazonaws.com:8082/registrationentity/get/registrationInfo/token/BREAK_ANKLES";

    private _get_all_registrations_url =
       "http://ec2-54-210-61-136.compute-1.amazonaws.com:8082/registrationentity/get/registrationInfo/entries/";

    constructor(private _http: Http){}

    getRegistrationDetails(partnerid: string)
    {
        return this._http.get(this._get_registration_url)
                    .map(res => res.json());
    }

    getAllRegistrations()
    {
        return this._http.get(this._get_all_registrations_url)
                   .map(res => res.json());
    }

    createRegistration(registrationInfo: RegistrationInfo)
    {
        console.log('createRegistration invoked!');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let registrationInfoJSON = JSON.stringify(registrationInfo);
        
        return this._http.post(this._create_registration_url, registrationInfoJSON, options)
                     .map((response:Response) => response.json())
                     .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}