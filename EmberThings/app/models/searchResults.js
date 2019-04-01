import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  artist: DS.attr('string'),
  year: DS.attr('number'),
  genre: DS.attr('string'),
  lyrics: DS.attr('string')
});
