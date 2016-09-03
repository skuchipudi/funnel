System.register(['angular2/core', 'angular2/http', 'angular2/router', './auditlogger.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, auditlogger_service_1;
    var AuditLogComponent;
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
            }],
        execute: function() {
            AuditLogComponent = (function () {
                function AuditLogComponent(_auditLoggerService, _routeParms) {
                    this._auditLoggerService = _auditLoggerService;
                    this._routeParms = _routeParms;
                    this._isLoading = true;
                }
                AuditLogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this._auditdetails = this._photoService.getAlbums();
                    // this._isLoading = false;
                    this._auditLoggerService.getAuditLogs()
                        .subscribe(function (auditlogs) {
                        _this._isLoading = false;
                        _this._auditlogs = auditlogs;
                    });
                };
                AuditLogComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Partner List</h1>\n         <div>\n         <i *ngIf=\"_isLoading\"  class=\"fa fa-spinner fa-spin fa-3x\"></i>\n         </div>\n         <table class=\"table table-striped table-hover \">\n         <thead>\n            <tr>\n             <th>Partner Id</th>\n             <th>User Id</th>\n             <th>Log Event</th>\n             <th>Time Stamp</th>\n            </tr>\n         </thead>\n        <tbody>\n            <tr *ngFor = \"#auditlog of _auditlogs\">\n               <a [routerLink]=\"['AuditDetail',{id: auditlog.partnerId}]\">  \n               <td>{{auditlog.partnerId}}</td>\n              </a>\n              <td> {{auditlog.userId}}</td>\n              <td>{{auditlog.logEvent}}</td>\n              <td>{{auditlog.timeStamp}}</td>\n            </tr>\n        </tbody>\n        </table>  \n        ",
                        providers: [auditlogger_service_1.AuditLoggerService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auditlogger_service_1.AuditLoggerService, router_1.RouteParams])
                ], AuditLogComponent);
                return AuditLogComponent;
            }());
            exports_1("AuditLogComponent", AuditLogComponent);
        }
    }
});
//# sourceMappingURL=auditlog.component.js.map