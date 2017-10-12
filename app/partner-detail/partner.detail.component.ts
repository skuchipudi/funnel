import {Component, OnInit} from '@angular/core';
import {PartnerDetailServices} from './partner.detail.services';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Partner} from '../models/partner.model';
import {FileMapService} from '../filemap/filemap.service';



declare var jQuery: any;
declare var d3: any;


@Component({
   templateUrl: '/app/partner-detail/partner.detail.component.html',
     providers: [PartnerDetailServices,FileMapService]
 })

export class PartnerDetailComponent implements OnInit {
    private _isLoading = true;
    private _subscription;
    private _partners: any;
    private _clients:any;
    private _partnerId: string;

/*
 <tbody>
         <tr *ngFor = "let p of _clients; let i=index;">
                 <td>{{c.clientName}}</td>
                 <td>{{c.clientDescription}}<td>
                 <tr *ngFor = "let a of c.auditEntries; let j=index;">
                    <td>{{a.logEntry}}
                 </tr>
         </tr>
        </tbody>
        */

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _partnerDetailServices:  PartnerDetailServices,
            private _fileMapService: FileMapService

            ) { }

    ngOnInit() {
       console.log('PartnerDetailComponent. ngOnit() called');

      this._activatedRoute.params.subscribe((params: Params) => {
           console.log( 'PartnerDetailComponent().partnerId =>' + params['partnerId']);
            this._partnerId = params['partnerId'];
            this._partnerDetailServices.getPartnerDetailsByPartnerId( params['partnerId']).
                subscribe(partners => {
                    this._isLoading = false;
                    this._partners = partners;
                } );


            this._partnerDetailServices.getClients( params['partnerId']).
                subscribe(clients => {
                  this._clients=clients;
                 })

            });
          //  this._partnerDetailServices.getDetailTable();
    }

     ngAfterViewInit() {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._fileMapService.renderTree('partnerId');
    }

    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    ngOnDestroy()
    {
        console.log('Filemap: noOnDestroy() called');
        this._fileMapService.destroyTree();
        
    }

}


