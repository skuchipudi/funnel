import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Partner} from './partner.detail';

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



    constructor(private _http: Http) { }

    getPartnerDetailsByPartnerId( partnerId: String) {
        console.log('PartnerDetailServices.getPartnerDetails() called ' + partnerId);
        return this._http.get(this.find_partner_url + partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    // getPartnerDetailsByPartnerId2( partnerId: String) {
    //     console.log('PartnerDetailServices.getPartnerDetails() 22 called ' + partnerId);
    //     return this._http.get(this.find_partner_url2 + partnerId)
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }

    getClients( partnerId: String) {
        console.log('PartnerDetailServices.getClients() called ' + partnerId);
        return this._http.get(this.get_client_url + partnerId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    deletePartner(partnerId: any) {
        console.log('PartnerDetailServices.delete() ENTER');
        // let partnerJSON = JSON.stringify(partner);
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let options = new RequestOptions({headers: headers});

       // console.log(this.delete_partner_url);
       // console.log(partnerJSON);
         console.log (this.delete_partner_url+partnerId);
         return this._http.get(this.delete_partner_url+partnerId)
            .map(res => res.json())
            .catch(this.handleError);
        // return this._http.post(this.delete_partner_url, partnerJSON, options)
        // .map((response:Response) => response.json())
        // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        
       
    }

    handleError(error: Response){
        console.error(error);
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
