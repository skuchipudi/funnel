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
import {PartnerServices} from './partner.services';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    templateUrl: '/app/partners/partner.component.html',
    providers: [PartnerServices]
 })

export class PartnerComponent implements OnInit {
   // turn if off if we are using JQuery
    private _isLoading = true;
    private _subscription;
    private _entries: any;

    // customers: any[] = [];

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerServices: PartnerServices
            ) { }

    ngOnInit() {
       console.log('PartnerComponent. ngOnit() called');
       
       this._subscription = this._activatedRoute.params.subscribe((params: Params) => {
        this._partnerServices.getEntries().
            subscribe(entries => {
                this._isLoading = false;
                this._entries = entries;
           } );
        });


//       this._partnerServices.getTable();
    }

}
