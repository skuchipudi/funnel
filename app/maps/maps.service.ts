import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MapsService {



      getMapsTable (partnerId:string, clientId:string) {
            console.log ("getTable() " + partnerId + "  " + clientId);
      }

}