import ApplicationAdapter from './application';

export default class ActivityAdapter extends ApplicationAdapter {
  urlForCreateRecord(modelName) {
    return `https://traxrep.com/api/v1/myday/activities/create/`;
  }
}
