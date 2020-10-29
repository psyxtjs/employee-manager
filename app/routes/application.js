import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service employees;

  async model() {
    let response = await fetch('/api/employees.json');
    let parsed = await response.json();

    for(let employee of parsed) {
      this.employees.create(employee);
    }
  }

}
