import Ember from 'ember';
import loadJson from 'intercom-party/mixins/load-json';

export default Ember.Route.extend(loadJson , {
  model() {
    return this.store.findAll('customer');
  }
});
