import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Client} from '../models/client.model';
import {ClientWrapperModel} from '../models/client.wrapper.model';



@Injectable()
export class ClientModifyServices {
    private _client_modify_url =
         'http://localhost:8080/partnerservices/modifyclient/';

    constructor(private _http: Http) { }

    modifyClient(clientModifyInfo: any) {

         // This has be a Post to Save the Partner 
        // Similar to the Partner Registration 
        console.log ('Modify Client Posted');
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        
        // TODO - YOu need to create the client wrapper
        // that consists of the partnerid and the client object
       
        let clientModifyInfoJSON = JSON.stringify(clientModifyInfo);
        console.log('Modify Client JSON =>' + clientModifyInfoJSON);
        //    
        return this._http.post(this._client_modify_url, clientModifyInfoJSON, options)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    handleError(error: Response){
        console.error(error);
        return  Observable.throw(error.json().error || 'Server Error');
    }
}

