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
var photo_service_1 = require('../album/photo.service');
var BrandComponent = (function () {
    function BrandComponent(_photoService) {
        this._photoService = _photoService;
        this.isLoading = true;
    }
    BrandComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._photoService.getPhotos(2)
            .subscribe(function (photos) {
            _this.isLoading = false;
            _this.photos = photos;
        });
    };
    BrandComponent = __decorate([
        core_1.Component({
            template: "\n        <h1>Welcome to FileSentinel&trade;</h1>\n        <div>\n        FileSentinel&trade; provides an\u00A0enterprise scale and peer \n        to peer registered and managed secure file exchange.\u00A0 \n        </div>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div>\n            <img *ngFor=\"let photo of photos\" src=\"{{ photo.thumbnailUrl }}\">\n        </div>\n    ",
        }), 
        __metadata('design:paramtypes', [photo_service_1.PhotoService])
    ], BrandComponent);
    return BrandComponent;
}());
exports.BrandComponent = BrandComponent;
//# sourceMappingURL=brand.component.js.map