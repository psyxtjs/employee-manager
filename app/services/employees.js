import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class EmployeesService extends Service {
  @service store;

  create(employeePOJO) {
    this.store.createRecord('employee', employeePOJO).save();
  }

  update(employee, employeePOJO) {
    employee.firstname = employeePOJO.firstname;
    employee.surname = employeePOJO.surname;
    employee.email = employeePOJO.email;
    employee.address = employeePOJO.address;
    employee.salary = employeePOJO.salary;
    employee.save();
  }

  delete(employee) {
    employee.deleteRecord();
    employee.save();
  }

}
