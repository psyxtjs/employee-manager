import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class AverageSalary extends Component {
  @service currency;

  get average() {
    let employees = this.args.employees;
    const sum = employees.reduce((a, b) => a + b.salary, 0);
    const avg = (sum / employees.length) || 0;
    return this.currency.displaySalary(avg);
  }

}
