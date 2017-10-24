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
