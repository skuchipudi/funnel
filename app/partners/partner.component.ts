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


       this._partnerServices.getTable();
    }

}
