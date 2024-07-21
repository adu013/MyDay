import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DashboardController extends Controller {
  @service session;
  @service store;

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

  @action
  async createActivity(mood, event) {
    let newActivity = this.store.createRecord('activity', {
      mood: mood,
    });

    try {
      await newActivity.save();
      this.router.transitionTo('analytics');
    } catch (error) {
      //
    }
  }
}
