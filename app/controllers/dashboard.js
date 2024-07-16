import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DashboardController extends Controller {
  @service session;

  @action
  async markHappy(event) {
    event.preventDefault();
  }

  async markNeutral(event) {
    event.preventDefault();
  }

  async markSad(event) {
    event.preventDefault();
  }
}
