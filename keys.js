console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

var spotify = new Spotify(keys.spotify);

search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);