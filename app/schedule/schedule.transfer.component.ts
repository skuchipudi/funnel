import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from  '@angular/forms';
export class Schedule


@Component({
    templateUrl: '/app/schedule/schedule.transfer.component.html'
})

export class ScheduleTransferComponent {
    _model: Schedule;
   constructor (private _router: Router){
        this._model = new Schedule();

   }


    
    onSubmit(form :NgForm){
        console.log(form);
        console.log(this._model);
       // this._router.navigate (['Albums']);
    }
}