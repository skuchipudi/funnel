/*
 *   Copyright 2019  Sunil S. Kuchipudi	
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
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var exampletable:any;
declare var table:any;


@Injectable()
export class AuditLogsService {
    private get_audit_logs =
         'http://localhost:8080/partnerservices/getauditlogs/';

    constructor(private _http: Http) { }

    // Use this if you do wan to use the Angular 2 feather and not the JQuery 
    getAuditLogsByPartnerAndClientID( partnerId: string, clientId: string) {
        console.log('AuditLogsService.getAuditLogsByPartnerAndClientID() called ' + partnerId + " & " + clientId);
        return this._http.get(this.get_audit_logs + "partnerId/" + partnerId + "/clientId/" + clientId)
            .map(res => res.json());
    }
    
    // This is the JQuery Table - has sorting and search and paging capabiliti
     // Note using this as I am not using JQuery
    //https://datatables.net/examples/index
     getTable (partnerId:string, clientId:string) {

      console.log ("getTable() " + partnerId + "  " + clientId);

       var table =  jQuery('#auditlogstable').DataTable(
        {
         "ajax": 
          {
             "url":"http://localhost:8080/partnerservices/getauditlogs/partnerId/" + partnerId + 
                   "/clientId/" + clientId,
             "dataSrc":"",
             "type":"GET",
          },
           "columns": [
                 {"data" : "partnerId"},
                 {"data" : "clientId"},
                 {"data" : "logEntry"},
                 {"data" : "timeStamp"},
             ],
        // https://datatables.net/manual/tech-notes/3
        // important  to destroy the table or else
        // this will give a reinitialization error
         "destroy":true,
         "retrieve": false,
         "paging":  true, 
         "dom": 'Bfrtip',
         "buttons": ["copy", "csv", "excel"],

        });
        return table;
    }
}

// "ajax": {
//                 "url": "http://localhost:8080/partnerservices/entries/",
//                 "type": "GET",
//                 "dataSrc": "",
//            },
