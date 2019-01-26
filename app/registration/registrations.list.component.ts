/*
 *  Copyright 2019  Sunil S. Kuchipudi	
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */

import {Component, OnInit} from '@angular/core';
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
             <th>Partner Name</th>
             <th>Server Address</th>
             <th>User Id</th>
             <th>Remote File Path</th>
             <th>Local File Path</th>
             <th>File Name</th>
            </tr>
         </thead>
        <tbody>
            <tr *ngFor = "let registrations_list of _registrations_list">
              <td> {{ registrations_list.partnerName}}</td>
              <td> {{ registrations_list.serverAddress}}</td>
              <td> {{ registrations_list.userId}}</td>
              <td> {{ registrations_list.remoteFilePath}}</td>
              <td> {{ registrations_list.localFilePath}}</td>
              <td> {{ registrations_list.filename}}</td>
              </tr>
        </tbody>
        </table>  
        `,
    providers: [RegistrationService ],
 })

export class RegistrationsListComponent implements OnInit {
    _isLoading = true;
    _registrations_list: any; // Array of RegistrationInfo

    constructor(
            private _registrationService: RegistrationService )
            //private _routeParms: RouteParams){
            {}
    
    
    ngOnInit(){
       
       this._registrationService.getAllRegistrations().
            subscribe( _registrations_list => {
                this._isLoading =false;
                this. _registrations_list =  _registrations_list;
            });
    }      
}