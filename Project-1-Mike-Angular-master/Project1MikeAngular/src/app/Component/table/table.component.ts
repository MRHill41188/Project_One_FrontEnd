import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/Service/employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    constructor( private httpService: HttpClient, private route: Router, private employeeService: EmployeeService) { }
    userId: number;
    roleId: number;
    userReimbs: string [];
    // tslint:disable-next-line: variable-name
    _url;

  ngOnInit(): void {
    // when refresh, you lose currentUser because it's a new instance of service class.
    // Solution: Use cookies that will store userId
    this.userId = this.employeeService.getCurrentUser().userId;
    this.roleId = this.employeeService.getCurrentUser().roleId;
    console.log(this.userId);
    console.log(this.roleId);

    // tslint:disable-next-line: triple-equals
    if (this.roleId == 1) {
      this._url = 'http://localhost:8080/EmplReimb/admin';
    }

    // tslint:disable-next-line: triple-equals
    if (this.roleId == 2) {
      this._url = 'http://localhost:8080/EmplReimb/display/' + this.userId;
    }

    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
      }
    );
  }

  Logout() {

    this.httpService.delete<any>('http://localhost:8080/EmplReimb/SessionServlet')
      .subscribe(
        () => {
          this.employeeService.setCurrentUser(false);
          this.route.navigateByUrl('');
          console.log('test');
        },
        error => console.log('Error. Unable to logout', error)
      );

  }

}
