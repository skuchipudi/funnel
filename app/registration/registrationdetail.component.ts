import {Component, OnInit} from '@angular/core';
import {RegistrationService} from './registration.service';
import {RegistrationInfo} from './registrationinfo';

@Component({
    template: `
       
        <h1>Registrations List</h1>
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
            <tr *ngFor = "let all_registrations of _all_registrations">
              <td> {{all_registrations.partnerId}}</td>
              <td> {{all_registrations.serverAddress}}</td>
              <td> {{all_registrations.userId}}</td>
              <td> {{all_registrations.remoteFilePath}}</td>
              <td> {{all_registrations.localFilePath}}</td>
              <td> {{all_registrations.filename}}</td>
              </tr>
        </tbody>
        </table>  

        
        <h1>Registration Details</h1>
        <div *ngFor = "let registrationDetail of _registrationDetail">
        Token Status  = {{registrationDetail.token.status}}<p>
        <p>
        Token Secret Key = {{registrationDetail.token.secretKey}}<p>
        User Id = {{registrationDetail.userId}}<p>
        Password *  = {{registrationDetail.password}}<p>
       
        Remote File Path  = {{registrationDetail.remoteFilePath}}<p>
        Local File Path = {{registrationDetail.localFilePath}}<p>
        File name  = {{registrationDetail.fileName}}<p>
        Partner Id  = {{registrationDetail.partnerId}}<p>
        </div>  


        `,
 
})

export class RegistrationDetailComponent implements OnInit {
    _isLoading = true;
    _registrationDetail: RegistrationInfo;
    _all_registrations: any; // Array of RegistrationInfo

    constructor(
            private _registrationService: RegistrationService 
            //private _routeParms: RouteParams
            )
            { }
    
    ngOnInit(){
        let partnerid = "BREAK_ANKLES";
        this._registrationService.getRegistrationDetails(partnerid).
            subscribe(registrationDetail => {
                this._isLoading = false;
                this._registrationDetail = registrationDetail;

       } );

       this._registrationService.getAllRegistrations().
            subscribe(all_registrations => {
                this._isLoading =false;
                this._all_registrations = all_registrations;
            });
    }      
}