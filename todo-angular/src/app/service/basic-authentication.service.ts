import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HelloWorldBean } from './data/welcome-data.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeJwtAuthenticationService(username:string, password:string){
    return this.http.post<any>(`http://localhost:8080/authenticate`,{username,password}).pipe(
      map(
        response => {
          sessionStorage.setItem('authenticateUser', username)
          sessionStorage.setItem('token', `Bearer ${response.token}`)
          return response
        }
      )
    );
  }

  authenticate(username:string, password:string){
    //console.log('before' + this.isUserLoggedIn())
    if (username==='Nawaz2000' && password=='123'){
      sessionStorage.setItem('authenticateUser', username);
      //console.log('after' + this.isUserLoggedIn());
      return true;
    }
    else
      return false;
  }

  executeAuthenticationService(username:string, password:string){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders(
      {
        Authorization: basicAuthHeaderString,
      }
    );
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicAuth`,
    {headers}).pipe(
      map(
        response => {
          sessionStorage.setItem('authenticateUser', username)
          sessionStorage.setItem('token', basicAuthHeaderString)
          return response
        }
      )
    );
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user===null);
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken(){
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
    return null
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean{
  constructor(
    public message: string
  ){

  }
}
