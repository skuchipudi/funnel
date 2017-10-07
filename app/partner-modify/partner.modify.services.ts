import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var partnerstable:any;
declare var table:any;


@Injectable()
export class PartnerModifyServices {
    private _partner_modify_url =
         'http://localhost:8080/partnerservices/modify/';

    constructor(private _http: Http) { }

    
    
    modifyPartner(partner: any) {
        // This has be a Post to Save the Partner 
        // Similar to the Partner Registration 
        console.log ('Modify Partner Posted');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let partnerJSON = JSON.stringify(partner);
        console.log('Modify Partner JSON =>' + partnerJSON);
        //    
        return this._http.post(this._partner_modify_url, partnerJSON, options)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    handleError(error: Response){
        console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }
}


// createRegistration(registrationInfo: Partner)
// {
//     console.log('createRegistration ENTER');
//     let headers = new Headers({'Content-Type': 'application/json'});
//     let options = new RequestOptions({headers: headers});
//     let registrationInfoJSON = JSON.stringify(registrationInfo);
//     //console.log("createRegistration()=>"+ registrationInfoJSON);

//     return this._http.post(this._create_partner_registration_url, registrationInfoJSON, options)
//                  .map((response:Response) => response.json())
//                  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
// }
