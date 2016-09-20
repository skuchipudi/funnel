import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegistrationService} from './registration.service';
import {RegistrationInfo} from './registrationinfo';

@Component({
    template: `
        <h1>Registrations</h1>
         <div>
         <i *ngIf="_isLoading"  class="fa fa-spinner fa-spin fa-3x"></i>
         </div>
         <table class="table table-striped table-hover ">
         <thead>
            <tr>
             <th>Partner Id</th>
             <th>Server Address</th>
             <th>User Id</th>
             <th>Remote File Path</th>
             <th>Local File Path</th>
             <th>File name </th>
            </tr>
         </thead>
        <tbody>
            <tr *ngFor = "#registrations_list of _registrations_list">
              <td> {{ registrations_list.partnerId}}</td>
              <td> {{ registrations_list.serverAddress}}</td>
              <td> {{ registrations_list.userId}}</td>
              <td> {{ registrations_list.remoteFilePath}}</td>
              <td> {{ registrations_list.localFilePath}}</td>
              <td> {{ registrations_list.filename}}</td>
              </tr>
        </tbody>
        </table>  
        `,
    providers: [RegistrationService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})

export class RegistrationsListComponent implements OnInit {
    _isLoading = true;
    _registrations_list: any; // Array of RegistrationInfo

    constructor(
            private _registrationService: RegistrationService, 
            private _routeParms: RouteParams){
    }
    
    ngOnInit(){
       
       this._registrationService.getAllRegistrations().
            subscribe( _registrations_list => {
                this._isLoading =false;
                this. _registrations_list =  _registrations_list;
            });
    }      
}