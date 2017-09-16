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

    
    


}
