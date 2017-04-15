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
     getTable ( partnerId: string, clientId: string) {

       var table =  jQuery('#exampletable').DataTable({
             "ajax": {
                 "url": "http://localhost:8080/partnerservices/getauditlogs/partnerId/" + partnerId + 
                 "/clientId/" + clientId,
                 "type": "GET",
                 "dataSrc": "",
            },
            "columns":
                [
                    { "data": "partnerId"},
                    { "data": "clientId" },
                    { "data": "logEntry" },
                    { "data": "timeStamp"}
                ]
            });
    }


}