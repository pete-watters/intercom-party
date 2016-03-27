import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  name: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  distanceFromIntercomOffice: Ember.computed('latitude', 'longitude', function() {
      return "100";
    // return this.get('latitude') + this.get('longitude');
  })
});
