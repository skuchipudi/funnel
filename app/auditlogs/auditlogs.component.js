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
var auditlogs_service_1 = require('./auditlogs.service');
var router_1 = require('@angular/router');
var AuditLogComponent = (function () {
    function AuditLogComponent(_router, _auditLogService) {
        this._router = _router;
        this._auditLogService = _auditLogService;
        this._isLoading = true;
        // TODO - Change this
        this._partnerId = "maker_bank";
        this._clientId = "guardian_client_id";
    }
    AuditLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Audit Component.ngOnInit() - ENTER');
        // this._auditLogService.getTable( this._partnerId, this._clientId);
        this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
            subscribe(function (entries) {
            _this._entries = entries;
            _this._isLoading = false;
        });
    };
    AuditLogComponent.prototype.onSubmit = function (form) {
        var _this = this;
        console.log('Audit Component.onSubmit() - ENTER');
        console.log("form value " + form.value.name);
        //this._auditLogService.getTable( this._partnerId, this._clientId);
        // Use this if you want to use the Angular2 paradigm
        this._auditLogService.getAuditLogsByPartnerAndClientID(this._partnerId, this._clientId).
            subscribe(function (entries) {
            _this._entries = entries;
            _this._isLoading = false;
        });
    };
    AuditLogComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/auditlogs/auditlogs.component.html',
            providers: [auditlogs_service_1.AuditLogsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, auditlogs_service_1.AuditLogsService])
    ], AuditLogComponent);
    return AuditLogComponent;
}());
exports.AuditLogComponent = AuditLogComponent;
//# sourceMappingURL=auditlogs.component.js.map