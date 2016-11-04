import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        console.log("AUTHGUARD -- canActivate() called");
          
       // if (localStorage.getItem('id_token')) {
            // logged in so return true
       //     return true;
        //}
       console.log( "AuthGuard.tokenNotExpired()" + tokenNotExpired());

        if(tokenNotExpired())
        {
           console.log("tokenNotExpired" + tokenNotExpired())
           return true;
        }
        // not logged in so redirect to login page
        //this.router.navigate(['/login']);
         this. router.navigate(['/filesentinelsplash']);
            return false;
    }
}