import { Component } from '@angular/core';
import { Auth }       from './auth/auth.service';
// NOT USED

@Component({
  selector: 'home',
  template: `<h1>Home Page</h1>
  <button class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
  <button class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>    
  `
})

export class HomeComponent {
  constructor(private auth: Auth) {}
};