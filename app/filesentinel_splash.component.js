System.register(['angular2/core', 'angular2/http', './photo.service'], function(exports_1, context_1) {
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
    var core_1, http_1, photo_service_1;
    var FileSentinelSplashComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            }],
        execute: function() {
            FileSentinelSplashComponent = (function () {
                function FileSentinelSplashComponent(_photoService) {
                    this._photoService = _photoService;
                    this.isLoading = true;
                }
                FileSentinelSplashComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._photoService.getPhotos(2)
                        .subscribe(function (photos) {
                        _this.isLoading = false;
                        _this.photos = photos;
                    });
                };
                FileSentinelSplashComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Welcome</h1>\n        <div>\n       \n        </div>\n        <div class=\"jumbotron\">\n         <h1> FileSentinel</h1>\n         <p>  FileSentinel&trade; provides an\u00A0enterprise scale and peer to peer registered and managed secure file exchange.</p>\n            <p><a class=\"btn btn-primary btn-lg\">Learn more</a></p>\n        </div>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div>\n            <img *ngFor=\"#photo of photos\" src=\"{{ photo.thumbnailUrl }}\">\n        </div>\n    ",
                        providers: [photo_service_1.PhotoService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService])
                ], FileSentinelSplashComponent);
                return FileSentinelSplashComponent;
            }());
            exports_1("FileSentinelSplashComponent", FileSentinelSplashComponent);
        }
    }
});
//# sourceMappingURL=filesentinel_splash.component.js.map