import Service from '@ember/service';

export default class CurrencyService extends Service {

  displaySalary(euros) {
    return euros.toLocaleString("de-DE", {style:"currency", currency:"EUR"});
  }

}
