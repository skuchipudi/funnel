/*
Copyright 2019  Sunil S. Kuchipudi	

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */

import {Component, OnInit} from '@angular/core';
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
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums: any;
    constructor(private _photoService: PhotoService){}
    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}