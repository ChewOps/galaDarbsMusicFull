import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchSong: function(){
		var searchValue = this.get('keyword')
		var allSongs = this.get('model')
		var artistArray = allSongs.map(function(model) {
          var artist = model.get('artist');
          return artist;
        });
		var titleArray = allSongs.map(function(model) {
          var title = model.get('title');
          return title;
        });
		var yearArray = allSongs.map(function(model) {
          var year = model.get('year');
          return year;
        });
		var genreArray = allSongs.map(function(model) {
          var genre = model.get('genre');
          return genre;
        });
		var lyricsArray = allSongs.map(function(model) {
          var lyrics = model.get('lyrics');
          return lyrics;
        });
		var i;
        for (i = 0; i < artistArray.length; i++) { 
		  if (artistArray[i] == this.get('keyword') || titleArray[i] == this.get('keyword')){
			  alert(artistArray[i] + " - " + titleArray[i] + "\nYear: " + yearArray[i] + "\nGenre: " + genreArray[i] + "\n" + lyricsArray[i])
		  }
        }
		this.transitionToRoute('search');
    }
  }
});
