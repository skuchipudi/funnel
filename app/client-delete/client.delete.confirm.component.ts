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
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
import {ClientDeleteServices} from '../client-delete/client.delete.services';


@Component({
   templateUrl: '/app/partner-delete/partner.delete.component.html',
   providers: [ClientDeleteServices]
   
 })

export class ClientDeleteConfirmedComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partnerId: string;
    private _clientId:any;
    
    private _partner: any;
    

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _clientDeleteServices:  ClientDeleteServices
            ) { }

    ngOnInit() {
   
        this._activatedRoute.params.subscribe((params: Params) => {
                 this._partnerId = params['partnerId'];
                 this._clientId = params['clientId'];
                 console.log ('ClientDeleteConfirmComponent().ngOnit()' + this._partnerId);
                 this._clientDeleteServices.delete(this._partnerId, this._clientId).
                        subscribe (partner => {
                                this._isLoading = false;
                                this._partner = partner;
                                // after deleting navigate to the partner's tab
                                this._router.navigate(['/partners']);
                         })
                  }); 
        }

}
