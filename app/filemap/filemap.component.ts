import {Component, OnInit} from '@angular/core';
import {FileMapService} from './filemap.service';


declare var jQuery: any;
declare var d3: any;


@Component({
    template: `
        <h1>Files Map</h1>
        <!-- File Tree renders thu the renderTree() lifecycle methods-->
        `,
        providers: [FileMapService]
})

export class FileMapComponent  {

    constructor( private _fileMapService: FileMapService) {
        console.log('FileMap constructor');
    }


    ngOnInit() {
        console.log('Filemap: ngOnInit() called');
    }

    ngAfterViewInit() {
        console.log('Filemap: ngAfterViewInit() called');
        // TODO - Pass the id to retrieve the
        this._fileMapService.renderTree('grande_partner_id');
    }

    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    ngOnDestroy()
    {
        console.log('Filemap: noOnDestroy() called');
        this._fileMapService.destroyTree();
    }


}
