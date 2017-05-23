import {Component, OnInit} from '@angular/core';
import  {MapsService} from './maps.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgForm} from  '@angular/forms';

@Component({
    templateUrl: '/app/maps/maps.component.html',
    providers: [MapsService]
})

export class MapsComponent  {
     constructor (
            private _router: Router,
            private _mapService:  MapsService
             ) {
                 // TODO - Change this
                 //this._partnerId="maker_bank_id";
                 //this._clientId="guardian_client_id";
             }
}