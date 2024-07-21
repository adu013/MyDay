import Model, { attr } from '@ember-data/model';

export default class ActivityModel extends Model {
  // @attr('string') date;  // This is alwways today
  @attr('string') mood;
}
