import Ember from 'ember';

export default Ember.Mixin.create({
  manuallyLoadCustomerData: function() {
    // FIXME - this function is not used but could ideally be called from mirage/config.js
    //       - that would help keep that neat and tidy and all data requests here
      var rawCustomerData = { "customers" : [
                              {"latitude": "52.986375", "user": 12, "name": "Christina McArdle", "longitude": "-6.043701"},
                              {"latitude": "51.92893", "user": 1, "name": "Alice Cahill", "longitude": "-10.27699"},
                              {"latitude": "51.8856167", "user": 2, "name": "Ian McArdle", "longitude": "-10.4240951"},
                              {"latitude": "52.3191841", "user": 3, "name": "Jack Enright", "longitude": "-8.5072391"},
                              {"latitude": "53.807778", "user": 28, "name": "Charlie Halligan", "longitude": "-7.714444"},
                              {"latitude": "53.4692815", "user": 7, "name": "Frank Kehoe", "longitude": "-9.436036"},
                              {"latitude": "54.0894797", "user": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"},
                              {"latitude": "53.038056", "user": 26, "name": "Stephen McArdle", "longitude": "-7.653889"},
                              {"latitude": "54.1225", "user": 27, "name": "Enid Gallagher", "longitude": "-8.143333"},
                              {"latitude": "53.1229599", "user": 6, "name": "Theresa Enright", "longitude": "-6.2705202"},
                              {"latitude": "52.2559432", "user": 9, "name": "Jack Dempsey", "longitude": "-7.1048927"},
                              {"latitude": "52.240382", "user": 10, "name": "Georgina Gallagher", "longitude": "-6.972413"},
                              {"latitude": "53.2451022", "user": 4, "name": "Ian Kehoe", "longitude": "-6.238335"},
                              {"latitude": "53.1302756", "user": 5, "name": "Nora Dempsey", "longitude": "-6.2397222"},
                              {"latitude": "53.008769", "user": 11, "name": "Richard Finnegan", "longitude": "-6.1056711"},
                              {"latitude": "53.1489345", "user": 31, "name": "Alan Behan", "longitude": "-6.8422408"},
                              {"latitude": "53", "user": 13, "name": "Olive Ahearn", "longitude": "-7"},
                              {"latitude": "51.999447", "user": 14, "name": "Helen Cahill", "longitude": "-9.742744"},
                              {"latitude": "52.966", "user": 15, "name": "Michael Ahearn", "longitude": "-6.463"},
                              {"latitude": "52.366037", "user": 16, "name": "Ian Larkin", "longitude": "-8.179118"},
                              {"latitude": "54.180238", "user": 17, "name": "Patricia Cahill", "longitude": "-5.920898"},
                              {"latitude": "53.0033946", "user": 39, "name": "Lisa Ahearn", "longitude": "-6.3877505"},
                              {"latitude": "52.228056", "user": 18, "name": "Bob Larkin", "longitude": "-7.915833"},
                              {"latitude": "54.133333", "user": 24, "name": "Rose Enright", "longitude": "-6.433333"},
                              {"latitude": "55.033", "user": 19, "name": "Enid Cahill", "longitude": "-8.112"},
                              {"latitude": "53.521111", "user": 20, "name": "Enid Enright", "longitude": "-9.831111"},
                              {"latitude": "51.802", "user": 21, "name": "David Ahearn", "longitude": "-9.442"},
                              {"latitude": "54.374208", "user": 22, "name": "Charlie McArdle", "longitude": "-8.371639"},
                              {"latitude": "53.74452", "user": 29, "name": "Oliver Ahearn", "longitude": "-7.11167"},
                              {"latitude": "53.761389", "user": 30, "name": "Nick Enright", "longitude": "-7.2875"},
                              {"latitude": "54.080556", "user": 23, "name": "Eoin Gallagher", "longitude": "-6.361944"},
                              {"latitude": "52.833502", "user": 25, "name": "David Behan", "longitude": "-8.522366"}
                            ]
            };
            return rawCustomerData;
  },
  actions: {
                loadCustomerData: () => {

                  //FIXME - this function issues a GET to local JSON file
                  //      - it works independantly but I have to figure out how to make it work with mirage
                  return Ember.$.getJSON( "intercom-party/data/customers.json").then((data) => {
                      var customerDataRecordCount = data.customers.length -1;
                      var customerDataArray = [];

                      for(var customerRecordIterationCount = 0; customerRecordIterationCount  < customerDataRecordCount; customerRecordIterationCount++){
                          // this.store.push({
                              customerDataArray.push({
                                id: customerRecordIterationCount,
                                type: 'customer',
                                attributes: data.customers[customerRecordIterationCount]
                              });
                            // });
                      }
                      return customerDataArray;
                    });
                },
                filterCustomerData: () => {
                  console.log("filterCustomerData");
                  // this.trigger('test');
                }
            }

});
