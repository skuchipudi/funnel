import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuditLoggerService} from './auditlogger.service';
import {AuditDetail} from './auditdetail';
import {FileMapService} from '../filemap/filemap.service';


@Component({
    templateUrl: '/app/audit/auditdetail.component.html',
    providers: [AuditLoggerService, FileMapService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AuditDetailComponent implements OnInit {
    _isLoading = true;
    _auditDetail:AuditDetail;

    constructor(
            private _auditLoggerService: AuditLoggerService, 
            private _filemapService: FileMapService,
            private _routeParms: RouteParams){
    }
    ngOnInit(){
        this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
            subscribe(auditDetail => {
                this._isLoading = false;
                this._auditDetail = auditDetail;
           } );
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
        this._filemapService.destroyTree();
    }
     
}