import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;
//let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('hNLdWzSYlWoQQHuyZyY5xiUjdv7yxmgu', 'spntr.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    console.log("AuthService.tokenNotExpired()" + tokenNotExpired());
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    console.log("AuthService.logout called");
    localStorage.removeItem('id_token');
  };
}
