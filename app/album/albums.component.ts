import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PhotoService} from './photo.service';

@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
             <li *ngFor = "#album of albums">
                <a [routerLink]="['Album', { id: album.id }]"> 
                  {{ album.title }}
                </a>
            </li>
        </ul>
    `,
    providers: [PhotoService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums: any;

    constructor(private _photoService: PhotoService){
    }
    
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}