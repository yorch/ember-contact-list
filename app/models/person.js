import DS from 'ember-data';
import faker from 'faker';

export default DS.Model.extend({
  firstName: DS.attr('string', {
    defaultValue() {
      return faker.name.firstName();
    }
  }),

  lastName: DS.attr('string', {
    defaultValue() {
      return faker.name.lastName();
    }
  }),

  jobType: DS.attr('string', {
    defaultValue() {
      return faker.name.jobType();
    }
  }),

  addressStreet: DS.attr('string', {
    defaultValue() {
      return faker.address.streetName();
    }
  }),

  addressCity: DS.attr('string', {
    defaultValue() {
      return faker.address.city();
    }
  }),

  addressState: DS.attr('string', {
    defaultValue() {
      return faker.address.stateAbbr();
    }
  }),

  addressZip: DS.attr('number', {
    defaultValue() {
      return faker.address.zipCode();
    }
  }),

  phoneNumber: DS.attr('string', {
    defaultValue() {
      return faker.phone.phoneNumber();
    }
  }),

  avatar: DS.attr('string', {
    defaultValue() {
      return faker.image.avatar();
    }
  }),

  // fullName: Ember.computed('firstName', 'lastName', function() {
  //   return `${this.get('firstName')} ${this.get('lastName')}`;
  // })

  fullName: function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }.property('firstName', 'lastName')
});
