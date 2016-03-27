import Ember from 'ember';
import loadJson from 'intercom-party/mixins/load-json';

export default Ember.Route.extend(loadJson , {
  model() {
    // return this.store.findAll('customer');
    // return this.store.query('customer', filter: { name: 'tomster@example.com' } );

    // this.store.query('customer', { filter: { name: 'Peter' } }).then(function(peters) {
    //   // Do something with `peters`
    //   console.log(peters);
    // });
    return this.store.queryRecord('customer', { filter: { id: 0 } });
    // this.store.queryRecord('customer', { filter: { name: 'Christina McArdle' } }).then(function(tomster) {
    //   console.log("WAT" + tomster);
    //   // do something with `tomster`
    // });
  }
});
