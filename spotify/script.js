// script.js

const got = require('got');

function getSpotifyTrackInfo() {
    // Replace '5BKKKNwrebowaMoUdBaNby' with the actual track ID
    var trackId = '5BKKKNwrebowaMoUdBaNby';

    // Spotify API endpoint for retrieving track information
    var apiUrl = 'https://api.spotify.com/v1/tracks/' + trackId;

    got(apiUrl)
        .then(response => {
            // Assuming got returns a response object with data
            var data = response.body;
            
            // Handle the retrieved data, for example:
            console.log(`Track Name: ${data.name}, Artist: ${data.artists[0].name}`);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the function to get Spotify track information
getSpotifyTrackInfo();

