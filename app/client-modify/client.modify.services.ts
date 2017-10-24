import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';




@Injectable()
export class ClientModifyServices {
    private _partner_modify_url =
         'http://localhost:8080/partnerservices/modify/';

    constructor(private _http: Http) { }

    
    
    modifyClient(partner: any) {
       console.log('modifyclient');
    }

    handleError(error: Response){
        console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }
}

