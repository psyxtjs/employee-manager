import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeRow extends Component {
  @service employees;
  @service currency;

  @action
  delete() {
    this.employees.delete(this.args.employee);
  }

  get displaySalary() {
    return this.currency.displaySalary(this.args.employee.salary);
  }

}
