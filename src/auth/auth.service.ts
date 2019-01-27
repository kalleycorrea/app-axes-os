import { Injectable } from '@angular/core';

//check whether a JWT is expired is to use angular2-jwt
//import decode from 'jwt-decode'; //npm i --save angular2-jwt

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }
  /*
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired
    return tokenNotExpired(null, token);
  }
  */
}
