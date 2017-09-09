import {Component, OnInit} from '@angular/core';
import {FileMapService} from './filemap.service';
import {NgForm} from  '@angular/forms';


declare var jQuery: any;
declare var d3: any;



@Component({
    templateUrl: '/app/filemap/filemap.component.html',
    providers: [FileMapService]
})

export class FileMapComponent  {

    private _partnerId: string;
    

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

    onSubmit(form: NgForm) {
        console.log('Filemap Component.onSubmit() - ENTER');
        // destroy the tree so that you can create a new one
        // or else the old one keep showing up
       // console.log('partnerid=>' + this._partnerId);
        //this._fileMapService.renderTree(this._partnerId);
    }

    // Note: you need to call this and clear svg
    // or else the graph will appear in every page.
    ngOnDestroy()
    {
        console.log('Filemap: OnDestroy() called');
        this._fileMapService.destroyTree();
    }


}
