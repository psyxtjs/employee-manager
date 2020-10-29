import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EmployeeUpdater extends Component {
  @service store;
  @service employees;

  @tracked editMode = false;
  @tracked employee;

  @tracked message = "";
  @tracked messageColourClass = "green";

  @tracked firstname;
  @tracked surname;
  @tracked email;
  @tracked address;
  @tracked salary;

  constructor(owner, args) {
    super(owner, args);

    if("edit" == args.flavour) {
      this.editMode = true;
      this.employee = args.employee;

      this.firstname = args.employee.firstname;
      this.surname = args.employee.surname;
      this.email = args.employee.email;
      this.address = args.employee.address;
      this.salary = args.employee.salary;
    }
  }

  @action
  updateEmployee() {
    event.preventDefault();

    if(!this.isValid()) {
      this.messageColourClass = "red";
      this.message = "Error adding employee";
      return;
    }

    let employeePOJO = {
      firstname: this.firstname,
      surname: this.surname,
      email: this.email,
      address: this.address,
      salary: this.salary
    };

    if(this.editMode) {

      this.employees.update(this.employee, employeePOJO);

    } else {

      this.employees.create(employeePOJO);

      this.firstname = "";
      this.surname = "";
      this.email = "";
      this.address = "";
      this.salary = "";
    }

    this.message = "Successfully " + (this.editMode ? "updated" : "added") + " employee";
    this.messageColourClass = "green";
  }

  isValid() {
    // Ahh I'm sure it'll be ok
    return true;
  }

}
