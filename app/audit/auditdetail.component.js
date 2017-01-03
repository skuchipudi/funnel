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
var auditlogger_service_1 = require('./auditlogger.service');
var filemap_service_1 = require('../filemap/filemap.service');
var router_1 = require('@angular/router');
var AuditDetailComponent = (function () {
    function AuditDetailComponent(_activatedRoute, _router, _auditLoggerService, _filemapService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._auditLoggerService = _auditLoggerService;
        this._filemapService = _filemapService;
        this._isLoading = true;
    }
    AuditDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            // console.log("id=" + id);
            _this._auditLoggerService.getAuditDetail(id).
                subscribe(function (auditDetail) {
                _this._isLoading = false;
                _this._auditDetail = auditDetail;
            });
        });
    };
    AuditDetailComponent.prototype.ngAfterViewInit = function () {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._filemapService.renderTree("partnerId");
    };
    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    AuditDetailComponent.prototype.ngOnDestroy = function () {
        console.log('Filemap: noOnDestroy() called');
        // you need to unsubscribe from the service
        // you subscribed in the ngInit()
        this._subscription.unsubscribe();
        this._filemapService.destroyTree();
    };
    AuditDetailComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/audit/auditdetail.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, auditlogger_service_1.AuditLoggerService, filemap_service_1.FileMapService])
    ], AuditDetailComponent);
    return AuditDetailComponent;
}());
exports.AuditDetailComponent = AuditDetailComponent;
//# sourceMappingURL=auditdetail.component.js.map