/*
 *   Copyright 2019  Sunil S. Kuchipudi	
 *
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
import {PhotoService} from '../album/photo.service';

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
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
})
export class BrandComponent implements OnInit {
    isLoading = true;
    photos: any;

    constructor(private _photoService: PhotoService) {
    }

    ngOnInit() {
        this._photoService.getPhotos(2)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }
}
