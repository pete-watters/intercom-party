import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
// import loadJson from 'intercom-party/mixins/load-json';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});
// console.log("CIA" + loadJson);
loadInitializers(App, config.modulePrefix);

export default App;
