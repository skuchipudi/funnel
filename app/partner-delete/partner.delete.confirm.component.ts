import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../partner-detail/partner.detail';
import {PartnerDeleteServices} from '../partner-delete/partner.delete.services';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services';


@Component({
   templateUrl: '/app/partner-delete/partner.delete.component.html',
   providers: [PartnerDeleteServices, PartnerDetailServices]
   
 })

export class PartnerDeleteConfirmedComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partnerId: string;
    private _partner: any;
    

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDeleteServices:  PartnerDeleteServices
            ) { }

    ngOnInit() {
        
        this._activatedRoute.params.subscribe((params: Params) => {
                 this._partnerId = params['partnerId'];
                 console.log ('PartnerDeleteConfirmComponent().ngOnit()' + this._partnerId);
                 this._partnerDeleteServices.deletePartner(this._partnerId).
                        subscribe (partner => {
                                this._isLoading = false;
                                this._partner = partner;
                        })
  
                }); 
        
          this._router.navigate(['/partners']);
        }

        // this._subscription = this._activatedRoute.params.subscribe((params: Params) => {
        //         this._partnerServices.getEntries().
        //             subscribe(entries => {
        //                 this._isLoading = false;
        //                 this._entries = entries;
        //            } );
        //         });
}
