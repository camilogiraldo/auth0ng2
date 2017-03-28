import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

@Injectable()
export class AuthService {

  lock = new Auth0Lock('EUWp3LKf6NihFuFEKmWjeyDijuN6oGdb','camilogiraldo.auth0.com');

  login() {
    this.lock.show((error: string, profile: Object, id_token: string) => {
      if (error) {
        console.log(error);
      }
      //We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      //we also get the users' JWT
      localStorage.setItem('id_token', id_token);
    });
  }

  loggedIn(): boolean {
    return tokenNotExpired();
  }

  logout() {
    //to logout we just need to remove users profile & token
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

}
