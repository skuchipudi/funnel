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

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PhotoService {
    private _url = 'http://jsonplaceholder.typicode.com/albums';

    constructor(private _http: Http) {
    }

    getAlbums() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getPhotos(id : any) {
        return this._http.get(this._url + '/' + id + '/photos')
            .map(res => res.json());
    }
}
