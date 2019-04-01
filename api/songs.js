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
        var quer
		
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