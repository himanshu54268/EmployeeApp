import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpData } from '../emp-data';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['././employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
    empDetails: any = [];
    cols: any[] = [];
    empData: EmpData = new EmpData;

    constructor(private empService: EmployeeService, private router: Router) { }

    ngOnInit(): void {

        this.cols = [
            { field: 'fName', header: 'FirstName' },
            { field: 'lName', header: 'LastName' },
            { field: 'dep', header: 'Department' },
        ];

        this.empDetails = this.empService.empDetails;
    }

    editData(data: any) {
        this.empService.setEmpDetail(data);
        this.empService.isFromEdit = true;
        this.router.navigate(["create-user"]);
    }

    deleteData(data: any) {
        this.empDetails = this.empDetails.filter((each: any)=>{
            return each.id != data.id;
        })
        this.empService.empDetails = this.empDetails;
    }

    empDetail(data: any){
        this.empService.setEmpDetail(data);
        this.empService.isFromDetail = true;
        this.router.navigate(["create-user"]);
    }

}
