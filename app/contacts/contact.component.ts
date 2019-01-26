/*
 *  Copyright 2019  Sunil S. Kuchipudi	
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

import {Component} from '@angular/core';
import {Router,CanDeactivate} from '@angular/router';


@Component({
    templateUrl: '/app/contact.component.html'
})

export class ContactComponent {

   constructor (private _router: Router){

   }

    onSubmit(form :any){
        console.log(form);
        this._router.navigate (['Albums']);
    }

  
}