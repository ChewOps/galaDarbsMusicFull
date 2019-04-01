import Controller from '@ember/controller';

export default Controller.extend({
actions: {
  saveSong: function() {
      var title = this.get('title');
      var artist= this.get('artist');
      var genre = this.get('genre');
      var year = this.get('year');
      var lyrics = this.get('lyrics');

      var song = this.store.createRecord('song', {
              title:title,
              artist:artist,
              genre:genre,
              year:year,
              lyrics:lyrics
      });
      song.save();
      this.transitionToRoute('song'); //pēc tam pārmet uz šo template
	}
}
});
