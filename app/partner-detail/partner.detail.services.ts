import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var example:any;
declare var table:any;



@Injectable()
export class PartnerDetailServices {
    private find_partner_url =
         'http://localhost:8080/partnerservices/findbypartnerid/';


    private get_client_url =
         'http://localhost:8080/partnerservices/getclients/';

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

    handleError(error: Response){
        //console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }

    // jQuery Service Impl  commented out in the html page
    getDetailTable () {

       var table =  jQuery('#exampletable').DataTable({
             "ajax": {
                 "url": 'http://localhost:8080/partnerservices/findbypartnerid/partnerId'
            },
            "columns":
                [
                    { "data": "partnerName"},
                    { "data": "partnerDescription" },
                ]
            });
    }
}
