System.register(['angular2/core', 'angular2/http', 'angular2/router', './auditlogger.service', '../filemap/filemap.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, auditlogger_service_1, filemap_service_1;
    var AuditDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auditlogger_service_1_1) {
                auditlogger_service_1 = auditlogger_service_1_1;
            },
            function (filemap_service_1_1) {
                filemap_service_1 = filemap_service_1_1;
            }],
        execute: function() {
            AuditDetailComponent = (function () {
                function AuditDetailComponent(_auditLoggerService, _filemapService, _routeParms) {
                    this._auditLoggerService = _auditLoggerService;
                    this._filemapService = _filemapService;
                    this._routeParms = _routeParms;
                    this._isLoading = true;
                }
                AuditDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
                        subscribe(function (auditDetail) {
                        _this._isLoading = false;
                        _this._auditDetail = auditDetail;
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
                    this._filemapService.destroyTree();
                };
                AuditDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/audit/auditdetail.component.html',
                        providers: [auditlogger_service_1.AuditLoggerService, filemap_service_1.FileMapService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auditlogger_service_1.AuditLoggerService, filemap_service_1.FileMapService, router_1.RouteParams])
                ], AuditDetailComponent);
                return AuditDetailComponent;
            }());
            exports_1("AuditDetailComponent", AuditDetailComponent);
        }
    }
});
//# sourceMappingURL=auditdetail.component.js.map