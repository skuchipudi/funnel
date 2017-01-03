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
var AuditLogComponent = (function () {
    function AuditLogComponent(_auditLoggerService) {
        this._auditLoggerService = _auditLoggerService;
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
            template: "\n        <h1>Partner List</h1>\n         <div>\n         <i *ngIf=\"_isLoading\"  class=\"fa fa-spinner fa-spin fa-3x\"></i>\n         </div>\n         <table class=\"table table-striped table-hover \">\n         <thead>\n            <tr>\n             <th>Partner Id</th>\n             <th>User Id</th>\n             <th>*Sender</th>\n             <th>*Receiver</th>\n             <th>Log Event</th>\n             <th>Time Stamp</th>\n            <th>*Status</th>\n            </tr>\n         </thead>\n        <tbody>\n            <tr *ngFor = \"let auditlog of _auditlogs\">\n              <a [routerLink]=\"['/auditdetail',{id:auditlog.partnerId}]\">\n              <td>{{auditlog.partnerId}}</td></a>\n              <td>{{auditlog.userId}}</td>\n              <td> Sender*</td>\n              <td> Receiver*</td>\n              <td>{{auditlog.logEvent}}</td>\n              <td>{{auditlog.timeStamp}}</td>\n              <td>PASS*</td>\n            </tr>\n        </tbody>\n        </table>\n        ",
        }), 
        __metadata('design:paramtypes', [auditlogger_service_1.AuditLoggerService])
    ], AuditLogComponent);
    return AuditLogComponent;
}());
exports.AuditLogComponent = AuditLogComponent;
//# sourceMappingURL=auditlog.component.js.map