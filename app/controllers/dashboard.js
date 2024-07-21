import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DashboardController extends Controller {
  @service session;
  @service store;
  @service router;

  @action
  async createActivity(mood, event) {
    event.preventDefault();
    try {
      let newActivity = this.store.createRecord('activity', {
        mood: mood,
      });

      await newActivity.save();
      console.log("activity saved");
      this.router.transitionTo('index');
    } catch (error) {
      console.log("Error: ", error);
    }
  }
}
