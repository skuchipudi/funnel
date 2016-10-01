import {Component} from 'angular2/core';
import {Router,CanDeactivate} from 'angular2/router';


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