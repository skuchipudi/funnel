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
import {Partner} from '../models/partner.model';
import {Client}  from '../models/client.model';

declare var jQuery: any;
declare var example:any;
declare var table:any;



@Injectable()
export class PartnerDetailServices {
    // TODO: Use relative paths
    private find_partner_url =
         'http://localhost:8080/partnerservices/findbypartnerid/';

     //    private find_partner_url2 =
     //    'http://localhost:8080/partnerservices/findbypartnerid2/';


    private delete_partner_url =
         'http://localhost:8080/partnerservices/delete/';


    private get_client_url =
         'http://localhost:8080/partnerservices/getclients/';


    private get_client_by_clientid_url =
         'http://localhost:8080/partnerservices/getclientbyclientid/';

    constructor(private _http: Http) { }

    getPartnerDetailsByPartnerId( partnerId: String) {
        console.log('PartnerDetailServices.getPartnerDetails() called ' + partnerId);
        return this._http.get(this.find_partner_url + partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }

   

    getClients( partnerId: String) {
        console.log('PartnerDetailServices.getClients() called ' + partnerId);
        return this._http.get(this.get_client_url + partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }

//  This is Stubbed and you need to define the back end services
  getClientForPartnerByClientId( partnerId:String, clientId: String){
    console.log ('getClientForPartnerByClientId => ' + partnerId  + "| " + clientId);
    return this._http.get(this.get_client_by_clientid_url + partnerId + "/" + clientId)
            .map(res => res.json())
            .catch(this.handleError);
  }
    

    
    handleError(error: Response){
        console.error(error);
        return  Observable.throw(error.json().error || 'PartnerDetail::Server Error');
    }

    
}
