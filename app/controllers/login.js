import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @service session;

  @tracked error;
  @tracked username;
  @tracked password;

  @action
  async login(event) {
    event.preventDefault();

    try {
      await this.session.authenticate(
        'authenticator:token',
        this.username,
        this.password,
      );
      // console.log('Authentication successful:', this.session.data.authenticated);
      console.log('Token is ', this.session.data.authenticated.token);
    } catch (error) {
      this.error = error;
    }
  }

  @action
  updateField(attr, event) {
    this[attr] = event.target.value;
  }
}
