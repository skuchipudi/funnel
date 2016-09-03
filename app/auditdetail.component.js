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
            }],
        execute: function() {
            AuditDetailComponent = (function () {
                function AuditDetailComponent(_auditLoggerService, _routeParms) {
                    this._auditLoggerService = _auditLoggerService;
                    this._routeParms = _routeParms;
                    this._isLoading = true;
                }
                /*ngOnInit(){
                    this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
                        subscribe(detail => {
                            this._isLoading = false;
                            this._auditDetail = detail;
                        });
                }
                */
                AuditDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._auditLoggerService.getAuditDetail(this._routeParms.get("id")).
                        subscribe(function (auditDetail) {
                        _this._isLoading = false;
                        _this._auditDetail = auditDetail;
                    });
                };
                AuditDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Audit Details</h1>\n        <div *ngIf=\"_isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>  \n        <table class=\"table table-striped table-hover \">\n         <thead>\n            <tr>\n             <th>Partner Id</th>\n             <th>User Id</th>\n             <th>Log Event</th>\n             <th>Time Stamp</th>\n             <th>Origin IP Address</th>\n             <th>Destination IP Address</th>\n            </tr>\n         </thead>\n         <tbody>\n          <tr *ngFor = \"#detail of _auditDetail\">\n                <td>{{detail.partnerId}}</td> \n                <td>{{detail.userId}}</td> \n                <td>{{detail.logEvent}}</td> \n                <td>{{detail.timeStamp}}</td>  \n                <td>{{detail.originIPAddress}}</td>  \n                <td>{{detail.destinationIPaddress}}</td>  \n            </tr>\n        </tbody>\n        </table>\n        ",
                        providers: [auditlogger_service_1.AuditLoggerService, http_1.HTTP_PROVIDERS],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [auditlogger_service_1.AuditLoggerService, router_1.RouteParams])
                ], AuditDetailComponent);
                return AuditDetailComponent;
            }());
            exports_1("AuditDetailComponent", AuditDetailComponent);
        }
    }
});
//# sourceMappingURL=auditdetail.component.js.map