import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

private REST_API_SERVER = "http://localhost:8080/employees/";

  constructor(private httpClient:HttpClient) { }

    public getEmployees(){
      console.log("getEmployees called");
          return this.httpClient.get<Employee[]>(this.REST_API_SERVER);
    }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(this.REST_API_SERVER + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(this.REST_API_SERVER, employee);
  }

}
