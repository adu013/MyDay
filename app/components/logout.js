import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LogoutComponent extends Component {
  @service session;

  @action
  async logout() {
    let response = await fetch('http://localhost:8000/api/v1/auth/logout/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + this.session.data.authenticated.token
      }
    });

    if (response.ok) {
      this.session.invalidate();
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  }
}
