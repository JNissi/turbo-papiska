var groove = Meteor.npmRequire('groove'),
	playlist = groove.createPlaylist(),
	player = groove.createPlayer();


Meteor.methods({
	playTrack: function(track) {
		groove.open(track.path, function(err, file) {
			if (err) throw err;
			playlist.insert(file);
			player.attach(playlist, function(err) {
				if (err) throw err;
			});
		});
	},
	queueTrack: function(track) {
		delete track['$$hashKey'];
		console.log(track);
		Queue.insert(track);
		groove.open(track.path, function(err, file) {
			if (err) throw err;
			playlist.insert(file);
		});
	},
	playToggle: function() {
		var status = Status.findOne({}),
			track = Queue.findOne({});
		Status.update(
			{},
			{
				$set: {
					playing: !status.playing,
					track: track
				}
			}
		);

	}
});
