import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../classes/employee';
import { EmployeeI } from './employeeObj';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public currentUser: EmployeeI = {
    userId: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    roleId: 0,
    sessionToken: '',
  };
  // tslint:disable-next-line: variable-name
  _url = 'http://localhost:8080/EmplReimb/SessionServlet';
  constructor(private http: HttpClient) { }

  getCurrentUser(): any {
    return this.currentUser;
  }

  resetCurrentUserFields() {
    this.currentUser.userId = 0;
    this.currentUser.username = '';
    this.currentUser.firstName = '';
    this.currentUser.lastName = '';
    this.currentUser.email = '';
    this.currentUser.roleId = 0;
    this.currentUser.sessionToken = '';
  }

  setCurrentUser(user: any) {
    if (user === false) {
      this.resetCurrentUserFields();
    } else {
      this.currentUser.userId = user.userId;
      this.currentUser.username = user.username;
      this.currentUser.firstName = user.firstName;
      this.currentUser.lastName = user.lastName;
      this.currentUser.email = user.email;
      this.currentUser.roleId = user.roleId;
      this.currentUser.sessionToken = user.sessionToken;
    }
  }

  isLoggedIn(): boolean {
    if (this.getCurrentUser().username.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  create(employee: Employee) {
    console.log('I am service: ' + employee.password);
    return this.http.post<any>(this._url, {
      username: employee.username,
      password: employee.password
    },
    {withCredentials: true},
    );

  }

  logout(): any {
    if (this.getCurrentUser) {
      console.log('Logging out the current user...');
      return this.http.delete<any>(this._url, {});
    }
  }

}
