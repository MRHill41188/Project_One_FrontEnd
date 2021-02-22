import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

employee = {username: '', password: ''};
  router: any;


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {}

  login() {

    return this.http.post<any>('http://localhost:8080/EmplReimb/SessionServlet', {
      username: this.employee.username,
      password: this.employee.password
    }).subscribe(
      data => {
        console.log('Success');
        console.log(this.employee.password);
        console.log(this.employee.username);
        this.route.navigateByUrl('/table');
      },
    error => {console.log('Error'); }
    );
  }

  Logout() {

    this.http.delete<any>('http://localhost:8080/EmplReimb/SessionServlet');

    this.route.navigateByUrl('');
    return;
  }
}
