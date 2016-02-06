import Ember from 'ember';
// import Person from 'app/model/person';

export default Ember.Route.extend({
  model: function() {
    const store = this.get('store');

    for (let i = 0; i < 10; i++) {
      store.createRecord('person');
    }

    return store.peekAll('person');
  },

  actions: {
    saveAll: function() {
      console.log('save All');
    }
  }
});
