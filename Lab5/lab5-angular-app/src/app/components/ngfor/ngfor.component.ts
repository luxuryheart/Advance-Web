import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  employee: any = [
    {'id':'1', 'employee_name':'WWE', 'employee_salary':'10000', 'employee_age':'35'},
    {'id':'2', 'employee_name':'QQQ', 'employee_salary':'10000', 'employee_age':'30'},
    {'id':'3', 'employee_name':'WWW', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'4', 'employee_name':'EEE', 'employee_salary':'18000', 'employee_age':'30'},
    {'id':'5', 'employee_name':'RRR', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'6', 'employee_name':'TTT', 'employee_salary':'10000', 'employee_age':'28'},
    {'id':'7', 'employee_name':'YYY', 'employee_salary':'10000', 'employee_age':'30'},
    {'id':'8', 'employee_name':'UUU', 'employee_salary':'18000', 'employee_age':'28'},
    {'id':'9', 'employee_name':'III', 'employee_salary':'10000', 'employee_age':'28'},
    {'id':'10', 'employee_name':'OOO', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'11', 'employee_name':'PPP', 'employee_salary':'10000', 'employee_age':'30'},
    {'id':'12', 'employee_name':'ASA', 'employee_salary':'11000', 'employee_age':'30'},
    {'id':'13', 'employee_name':'DDF', 'employee_salary':'10000', 'employee_age':'28'},
    {'id':'14', 'employee_name':'QEWQE', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'15', 'employee_name':'DSFSDV', 'employee_salary':'10000', 'employee_age':'30'},
    {'id':'16', 'employee_name':'QEWQ', 'employee_salary':'10000', 'employee_age':'35'},
    {'id':'17', 'employee_name':'VCXCB', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'18', 'employee_name':'ZCXZ', 'employee_salary':'10000', 'employee_age':'35'},
    {'id':'19', 'employee_name':'AAAA', 'employee_salary':'15000', 'employee_age':'30'},
    {'id':'20', 'employee_name':'SSS', 'employee_salary':'18000', 'employee_age':'35'},
    {'id':'21', 'employee_name':'DDD', 'employee_salary':'10000', 'employee_age':'30'},
    {'id':'22', 'employee_name':'GGG', 'employee_salary':'15000', 'employee_age':'35'},
    {'id':'23', 'employee_name':'LLL', 'employee_salary':'10000', 'employee_age':'30'},
  ]

}
