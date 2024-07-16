import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AnalyticsController extends Controller {
  @service session;
}
