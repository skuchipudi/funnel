import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuditLoggerService {
    private _url = 
         "http://ec2-54-210-61-136.compute-1.amazonaws.com:8081/auditlogger/entries/";
    
    private _auditDetailUrl = 
         "http://ec2-54-210-61-136.compute-1.amazonaws.com:8081/auditlogger/getentry/partnerId/";
    
    private _url2 = "http://jsonplaceholder.typicode.com/albums";
    

    constructor(private _http: Http){ }
    
    getAlbums() {
        return this._http.get(this._url2)
            .map(res => res.json());
    }
    
    getAuditLogs() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    getAuditDetail(id:any){
        return this._http.get(this._auditDetailUrl + id)
            .map(res => res.json())  
    }
}