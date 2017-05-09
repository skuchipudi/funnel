"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var partner_detail_services_1 = require('./partner.detail.services');
var router_1 = require('@angular/router');
var filemap_service_1 = require('../filemap/filemap.service');
var PartnerDetailComponent = (function () {
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
    function PartnerDetailComponent(_activatedRoute, _router, _partnerDetailServices, _fileMapService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._partnerDetailServices = _partnerDetailServices;
        this._fileMapService = _fileMapService;
        this._isLoading = true;
    }
    PartnerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('PartnerDetailComponent. ngOnit() called');
        this._activatedRoute.params.subscribe(function (params) {
            console.log('PartnerDetailComponent().partnerId =>' + params['partnerId']);
            _this._partnerId = params['partnerId'];
            _this._partnerDetailServices.getPartnerDetailsByPartnerId(params['partnerId']).
                subscribe(function (partners) {
                _this._isLoading = false;
                _this._partners = partners;
            });
            _this._partnerDetailServices.getClients(params['partnerId']).
                subscribe(function (clients) {
                _this._clients = clients;
            });
        });
        this._partnerDetailServices.getDetailTable();
    };
    PartnerDetailComponent.prototype.ngAfterViewInit = function () {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._fileMapService.renderTree('partnerId');
    };
    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    PartnerDetailComponent.prototype.ngOnDestroy = function () {
        console.log('Filemap: noOnDestroy() called');
        this._fileMapService.destroyTree();
    };
    PartnerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/partner-detail/partner.detail.component.html',
            providers: [partner_detail_services_1.PartnerDetailServices, filemap_service_1.FileMapService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, partner_detail_services_1.PartnerDetailServices, filemap_service_1.FileMapService])
    ], PartnerDetailComponent);
    return PartnerDetailComponent;
}());
exports.PartnerDetailComponent = PartnerDetailComponent;
//# sourceMappingURL=partner.detail.component.js.map