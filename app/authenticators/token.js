import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  async restore(data) {
    let { token } = data;
    if (token) {
      return data;
    } else {
      throw 'No valid session data'
    }
  },

  async authenticate(username, password) {
    let response = await fetch('http://localhost:8000/api/v1/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      return response.json();
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  },

  async invalidate() {
  },
});
