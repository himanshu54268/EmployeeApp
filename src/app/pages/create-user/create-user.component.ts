import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EmpData } from '../emp-data';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-create-user',
    templateUrl: './create-user.component.html',
    styleUrls: ['./create-user.component.css'],
    providers: [MessageService],
})
export class CreateUserComponent implements OnInit {
    empData: EmpData = new EmpData;
    department: any = ['Development', 'QA', 'Client Support', 'Networking'];
    isFromEdit: boolean = false;
    submitLabel: string = "Submit";
    isFromDetail: boolean = false;
    empHeader: string = "Create Employee"

    constructor(private empService: EmployeeService, private router: Router,
        private messageService: MessageService) { }
    ngOnInit(): void {
        this.isFromEdit = this.empService.isFromEdit;
        this.isFromDetail = this.empService.isFromDetail;
        if (this.isFromEdit || this.isFromDetail) {
            this.empData = this.empService.empData;
            this.submitLabel = "Update";
            this.empHeader = "Update Employee"
            if (this.isFromDetail) {
                this.empHeader = "View Employee"
            }
        }
        this.empService.$employee.subscribe(res => {
            this.empService.empData = res;
        })
    }

    addData() {
        if (this.empData.dep === "") {
            alert("Please Select Department");
            return;
        }
        if (this.isFromEdit) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: "Employee Updated Successfully" });
        }
        else {
            this.empData.id = this.empService.empDetails.length + 1;
            this.empService.empDetails.push(this.empData);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: "Employee Added Successfully" });
        }
        setTimeout(() => {
            this.router.navigate(["emp-dashboard"]);
        }, 500);
    }

    replace(arr: any, newEntry: any, index: number) {
        arr[index] = newEntry;
        return arr.slice();
    }

    goBack() {
        this.router.navigate(["emp-dashboard"]);
    }

    ngOnDestroy() {
        this.isFromDetail = false;
        this.isFromEdit = false;
        this.empService.isFromEdit = false;
        this.empService.isFromDetail = false;
    }

}