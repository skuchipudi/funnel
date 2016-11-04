import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth }       from '../auth/auth.service';

// NOT USED

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent  {
     constructor(private auth: Auth) {}
}
