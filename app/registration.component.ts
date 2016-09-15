import {Component} from 'angular2/core';
import {Router} from 'angular2/router';


@Component({
    templateUrl: '/app/registration.component.html'
})

export class RegistrationComponent {
   constructor (private _router: Router){
   }
    
    onSubmit(form:any){
        console.log(form.value.partnername);
        console.log(form.value.serveraddress);
        console.log(form.value.remotefilepath);
        console.log(form.value.localfilepath);
        console.log(form.value.serveruserid);
        console.log(form.value.serverpassword);
        console.log(form.value.partnerdescription);
        console.log(JSON.stringify(form.value));      
        // call the service
       // this._router.navigate (['Albums']);
    }

  
}