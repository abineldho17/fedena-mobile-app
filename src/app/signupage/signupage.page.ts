import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signupage',
  templateUrl: './signupage.page.html',
  styleUrls: ['./signupage.page.scss'],
})
export class SignupagePage implements OnInit {


  users:any;

  constructor(private route: Router,private http:HttpClient) { }
  nextpage() {
    this.route.navigate(['/tabs/tab1']);
  }



  ngOnInit() {
    this.http.get("https://6180b83b8bfae60017adfbb5.mockapi.io/api/users").subscribe(
      data => this.users = data
      
      );
      
  }

}
