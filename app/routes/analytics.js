import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AnalyticsRoute extends Route {
  @service session;
  @service store;

  beforeModel(transition) {
    this.session.setup();
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    try {
      return this.store.findRecord('analytics', 1);
    } catch (error) {
      //
    }
  }
}
