import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class ClientDeleteServices {
    private client_delete_url =
         'http://localhost:8080/partnerservices/clientdelete/';

    constructor(private _http: Http) { }

   
    
    delete(partnerId: any, clientId:any) {
         console.log (this.client_delete_url+partnerId+"/"+clientId );
         return this._http.get(this.client_delete_url+partnerId+"/"+clientId)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error.json());
        return  Observable.throw(error.json().error || 'ClientDeleteServices: Server Error');
    }

}
