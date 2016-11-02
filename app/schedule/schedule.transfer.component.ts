import {Component} from '@angular/core';
import {Router} from '@angular/router';


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