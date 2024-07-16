import Model, { attr } from '@ember-data/model';

export default class AnalyticsModel extends Model {
  // @attr('number') thisMonthTotalDays;
  // @attr('number') thisMonthHappyDays;
  // @attr('number') thisMonthNeutralDays;
  // @attr('number') thisYearTotalDays;
  // @attr('number') thisYearHappyDays;
  // @attr('number') thisMonthNeutralDays;
  // @attr('number') thisMonthSadDays;

  @attr this_month_total_days;
  @attr this_month_happy_days;
  @attr this_month_neutral_days;
  @attr this_month_sad_days;
  @attr this_year_total_days;
  @attr this_year_happy_days;
  @attr this_year_neutral_days;
  @attr this_year_sad_days;
}
