import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:8000';
  namespace = 'api/v1/myday';

  @service session;

  @computed('session.data.authenticated.token', 'session.isAuthenticated')
  get headers() {
    let headers = {};
    // Set Header: Accept & Content-Type
    headers['Accept'] = 'application/json';
    headers['Content-Type'] = 'application/json';

    // Header: Authorization
    if (this.session.isAuthenticated) {
      headers['Authorization'] =
        'Token ' + this.session.data.authenticated.token;
    }

    return headers;
  }
  // Override buildURL method to append a trailing slash
  buildURL(...args) {
    let url = super.buildURL(...args);

    // Append a trailing slash if it is not already present
    if (!url.endsWith('/')) {
      url += '/';
    }

    return url;
  }
}
