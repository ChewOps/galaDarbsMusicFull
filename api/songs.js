// api/songs.js

var Song = require('../models/song');

module.exports.getAllSongs = function(req, res) {
    Song.find(function(err, song) {
        if (err) {
            res.send(err);
        }
        res.json({song: song});
    });
};

module.exports.getASong = function(req, res, id) {
    Song.findById(id, function(err, songs) {
        if (err) {
            return res.send(err);
        }
        res.json({song: song});
    });
};

module.exports.findById = function(req, res) {
  console.log(req.params.id);
    Song.findById(req.params.id ,function(err, data){
      if(err){console.log(err);}
      console.log(data);
      return res.send({
        song: data
      });
    });
};

module.exports.addSong = function(req,res) {
    var song = new Song(req.body.song);
    song.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({song: song});
    });
};

module.exports.updateSong = function(id, req, res) {
        var query = {_id: id};
        Song.findByIdAndUpdate(query, {$set: req.body.song}, function(err, song) {
            if (err) {
              return  res.send(err);
            };
            res.json({song: song});
        });
};

module.exports.deleteSong = function (id, req, res) {
     var query = {_id: id};
    Song.remove(query, song, res);
};


module.exports.findByLyrics = function(req, res, next) {
  var songRegex = {"$regex": new RegExp('^' + req.params.song.toLowerCase(),  'i')};
  Song.find({$or:
    [
        { title: songRegex },
        { artist: songRegex },
        { lyrics: songRegex }
    ]}, function (err, data) {
          if (err) throw err;
          res.send(data);
  });
};
