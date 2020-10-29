import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class TotalSalary extends Component {
  @service currency;

  get total() {
    let employees = this.args.employees;
    let sum = employees.reduce((a, b) => a + b.salary, 0);
    return this.currency.displaySalary(sum);
  }

}
