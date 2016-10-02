import {Component} from 'angular2/core';
import {Router,CanDeactivate} from 'angular2/router';


@Component({
    templateUrl: '/app/schedule/schedule.transfer.component.html'
})

export class ScheduleTransferComponent {
    
   constructor (private _router: Router){

   }
    
    onSubmit(form :any){
        console.log(form);
        this._router.navigate (['Albums']);
    }

  
}