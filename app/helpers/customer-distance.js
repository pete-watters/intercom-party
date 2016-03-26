import Ember from 'ember';

// TODO change this so it checks distance from office and returns local if less than 100km

const communityPropertyTypes = [
 'Condo',
 'Townhouse',
 'Apartment'
];

export function customerDistance([type]/*, hash*/) {
 if (communityPropertyTypes.contains(type)) {
   return 'Community';
 }

 return 'Standalone';
}

export default Ember.Helper.helper(customerDistance);
