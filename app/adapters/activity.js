import ApplicationAdapter from './application';

export default class ActivityAdapter extends ApplicationAdapter {
  urlForCreateRecord(modelName) {
    return `http://localhost:8000/api/v1/myday/activities/create/`;
  }
}
