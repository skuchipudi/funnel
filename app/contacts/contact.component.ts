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