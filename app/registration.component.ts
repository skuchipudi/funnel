import {Component} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
    templateUrl: '/app/registration.component.html'
})

export class RegistrationComponent {
   constructor (private _router: Router){
   }
    
    onSubmit(form :any){
        console.log(form);
        this._router.navigate (['Albums']);
    }

  
}