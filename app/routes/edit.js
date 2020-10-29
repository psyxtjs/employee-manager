import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EmployeesEditRoute extends Route {
  @service store;

  model(args) {
    return this.store.findRecord('employee', args.employee_id);
  }

}
