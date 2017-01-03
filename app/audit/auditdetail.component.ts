import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuditLoggerService} from './auditlogger.service';
import {AuditDetail} from './auditdetail';
import {FileMapService} from '../filemap/filemap.service';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    templateUrl: '/app/audit/auditdetail.component.html',
 })

export class AuditDetailComponent implements OnInit {
    _isLoading = true;
    _auditDetail:AuditDetail;
    _id;
    _subscription;

    constructor (
            private _activatedRoute: ActivatedRoute,
            private _router: Router,
            private _auditLoggerService: AuditLoggerService,
            private _filemapService: FileMapService
            ){ }

    ngOnInit(){
       this._subscription = this._activatedRoute.params.subscribe((params: Params) => {
        let id = params['id'];
       // console.log("id=" + id);
        this._auditLoggerService.getAuditDetail(id).
            subscribe(auditDetail => {
                this._isLoading = false;
                this._auditDetail = auditDetail;
           } );
        });
    }


    ngAfterViewInit() {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._filemapService.renderTree("partnerId");
    }

    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    ngOnDestroy()
    {
        console.log('Filemap: noOnDestroy() called');
        // you need to unsubscribe from the service
        // you subscribed in the ngInit()
        this._subscription.unsubscribe();
        this._filemapService.destroyTree();

    }

}