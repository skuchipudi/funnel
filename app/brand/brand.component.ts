import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Welcome to FileSentinel&trade;</h1>
        <div>
        FileSentinel&trade; provides an enterprise scale and peer 
        to peer registered and managed secure file exchange.  
        </div>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <img *ngFor="#photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class BrandComponent implements OnInit {
    isLoading = true;
    photos: any;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getPhotos(2)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}