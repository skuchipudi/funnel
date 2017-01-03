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
var filemap_service_1 = require('./filemap.service');
var FileMapComponent = (function () {
    function FileMapComponent(_fileMapService) {
        this._fileMapService = _fileMapService;
        console.log('FileMap constructor');
    }
    FileMapComponent.prototype.ngOnInit = function () {
        console.log('Filemap: ngOnInit() called');
    };
    FileMapComponent.prototype.ngAfterViewInit = function () {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._fileMapService.renderTree('partnerId');
    };
    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    FileMapComponent.prototype.ngOnDestroy = function () {
        console.log('Filemap: noOnDestroy() called');
        this._fileMapService.destroyTree();
    };
    FileMapComponent = __decorate([
        core_1.Component({
            template: "\n        <h1>Files Map</h1>\n        <!-- File Tree renders thu the renderTree() lifecycle methods-->\n        ",
            providers: [filemap_service_1.FileMapService]
        }), 
        __metadata('design:paramtypes', [filemap_service_1.FileMapService])
    ], FileMapComponent);
    return FileMapComponent;
}());
exports.FileMapComponent = FileMapComponent;
//# sourceMappingURL=filemap.component.js.map