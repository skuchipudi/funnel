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
