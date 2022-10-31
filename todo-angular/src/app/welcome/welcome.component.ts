import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some welcome message'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      // for handling success message
      response => this.handleSuccessfulResponse(response),
      // for handling error message
      error => this.handleErrorResponse(error));
  }
  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService = error.error.message
  }

  handleSuccessfulResponse(response:HelloWorldBean) {
    this.welcomeMessageFromService = response.message
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      // for handling success message
      response => this.handleSuccessfulResponse(response),
      // for handling error message
      error => this.handleErrorResponse(error));
  }

}
