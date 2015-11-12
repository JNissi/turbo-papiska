var groove = Meteor.npmRequire('groove'),
	fs = Meteor.npmRequire('fs'),
	path = '/home/jnissi/Music',
	files = [];

function handleDir(path) {
	var dir = fs.readdirSync(path);

	dir.forEach(function(file) {
		if (fs.statSync(path + '/' + file).isDirectory()) {
			handleDir(path + '/' + file);
		} else {
			files.push(path + '/' + file);
		}
	});
}

Artists.remove({});
Albums.remove({});
Tracks.remove({});
handleDir(path);
files.forEach(function(file) {
	groove.open(file, Meteor.bindEnvironment(function(err, file) {
		var metadata = file.metadata(),
			artist = metadata.ARTIST || metadata.artist,
			album = metadata.ALBUM || metadata.album,
			albumArtist = metadata.ALBUM_ARTIST || metadata.album_artist,
			title = metadata.TITLE || metadata.title,
			duration = file.duration();
		if (err) throw err;

		Artists.upsert({
			name: artist
		},{
			name: artist
		});

		Albums.upsert({
			name: album,
			artist: albumArtist
		}, {
			name: album,
			artist: albumArtist
		});

		Tracks.upsert({
			path: file.filename
		}, {
			path: file.filename,
			artist: artist,
			album: album,
			title: title,
			duration: duration
		});

		file.close(function(err) {
			if (err) throw err;
		});
	}));
});

Status.upsert(
	{},
	{
		playing: false,
		position: 0
	}
);
