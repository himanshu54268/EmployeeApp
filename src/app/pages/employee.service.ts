import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EmpData } from './emp-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public empList = new Subject<any>();
  public $employee = this.empList.asObservable(); 
  empDetails: any[] = []; 
  empData: EmpData = new EmpData;
  isFromEdit: boolean = false;
  isFromDetail: boolean = false;
  constructor() { }

  setEmpDetail(val: any){
    this.empList.next(val);
  }
}
