import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
    @attr('string') firstname;
    @attr('string') surname;
    @attr('string') email;
    @attr('string') address;
    @attr('euros') salary;

    get fullName() {
        return `${this.firstname} ${this.surname}`;
    }

}
