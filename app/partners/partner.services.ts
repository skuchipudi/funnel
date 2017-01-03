import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var partnerstable:any;
declare var table:any;


@Injectable()
export class PartnerServices {
    private _url =
         'http://localhost:8080/partnerservices/entries/';

    constructor(private _http: Http) { }

    getEntries() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    
    // Note using this as I am not using JQuery
    //https://datatables.net/examples/index
     getTable () {

       var table =  jQuery('#partnerstable').DataTable({
             "ajax": {
                 "url": "http://localhost:8080/partnerservices/entries/",
                 "type": "GET",
                 "dataSrc": "",
            },
            "columns":
                [
                    { "data": "partnerName"},
                    { "data": "partnerDescription" },
                    { "data": "emailAddress.emailAddress" },
                ]
            });
    }

    


}
