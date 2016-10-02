import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {PhotoService} from '../album/photo.service';

@Component({
    templateUrl: './app/splash/filesentinel_splash.html',
    providers: [PhotoService, HTTP_PROVIDERS]
})
export class FileSentinelSplashComponent implements OnInit {
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