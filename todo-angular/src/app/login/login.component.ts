import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    //console.log(this.username)
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //passing username as a pararmeter to welcome page... .../welcome/parameter
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    }else
      this.invalidLogin = true;
  }

}
