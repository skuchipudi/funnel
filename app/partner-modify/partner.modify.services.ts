import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var partnerstable:any;
declare var table:any;


@Injectable()
export class PartnerModifyServices {
    private partner_delete_url =
         'http://localhost:8080/partnerservices/delete/';

    constructor(private _http: Http) { }

   
    
    deletePartner(partnerId: any) {
          console.log (this.partner_delete_url+partnerId);
         return this._http.get(this.partner_delete_url+partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }

    


}
