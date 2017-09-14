import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var example:any;
declare var table:any;



@Injectable()
export class PartnerModifyServices {
    // TODO: Use relative paths
    private find_partner_url =
         'http://localhost:8080/partnerservices/findbypartnerid/';

  
    constructor(private _http: Http) { }

    getPartnerModifyServices( partnerId: String) {
        console.log('PartnerDetailServices.getPartnerDetails() called ' + partnerId);
        return this._http.get(this.find_partner_url + partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }
    handleError(error: Response){
        //console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }
}