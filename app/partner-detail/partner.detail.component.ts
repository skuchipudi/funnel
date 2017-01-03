import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from './partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from './partner.detail';

@Component({
   templateUrl: '/app/partner-detail/partner.detail.component.html',
     providers: [PartnerDetailServices]
 })

export class PartnerDetailComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partners: any;
    private _clients:any;


    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices
            ) { }

    ngOnInit() {
       console.log('PartnerDetailComponent. ngOnit() called');
       //this.sub = this.route.params.subscribe(params => {
       //this.id = +params['id'];
      //this._subscription = 
      this._activatedRoute.params.subscribe((params: Params) => {
           console.log( 'PartnerDetailComponent().partnerId =>' + params['partnerId']);

            this._partnerDetailServices.getPartnerDetails( params['partnerId']).
                subscribe(partners => {
                    this._isLoading = false;
                    this._partners = partners;
                } );

            this._partnerDetailServices.getClients( params['partnerId']).
                subscribe(clients => {
                  this._clients=clients;
                 })

            });
         //   this._partnerDetailServices.getDetailTable();
    }
}


