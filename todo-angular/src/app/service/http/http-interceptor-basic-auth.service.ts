import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
      Steps:
      1. intercept the http request
      2. clone the request and add basic auth header
      3. send the cloned request to the next handler
    */

    // let username = 'user'
    // let password = '123'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
      req = req.clone(
        {
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        }
      )
    }

    return next.handle(req)
  }
  
}
