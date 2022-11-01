import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Nawaz2000'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false;

  constructor(
    private router:Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin() {
  //   //console.log(this.username)
  //   if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //passing username as a pararmeter to welcome page... .../welcome/parameter
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false;
  //   }else
  //     this.invalidLogin = true;
  // }

  handleBasicAuthLogin() {
    //console.log(this.username)
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        response => {
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true
        }
      )
      
  }

}
