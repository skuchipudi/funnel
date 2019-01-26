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



@Injectable()
export class ClientDeleteServices {
    private client_delete_url =
         'http://localhost:8080/partnerservices/clientdelete/';

    constructor(private _http: Http) { }

   
    
    delete(partnerId: any, clientId:any) {
         console.log (this.client_delete_url+partnerId+"/"+clientId );
         return this._http.get(this.client_delete_url+partnerId+"/"+clientId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error.json());
        return  Observable.throw(error.json().error || 'ClientDeleteServices: Server Error');
    }

}
