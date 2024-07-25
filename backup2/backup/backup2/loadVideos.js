function loadVideos() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => {
            var output = '';
            for (var i in data) {
                var videoUrl = data[i];
                var videoId = getVideoIdFromUrl(videoUrl);
                var imageUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
                output += '<a href="' + videoUrl + '" target="_blank">';
                output += '<img src="' + imageUrl + '" alt="Video ' + (parseInt(i) + 1) + '">';
                output += '</a>';
            }
            document.getElementById('video-carousel').innerHTML = output;
        })
        .catch(error => console.error('Error:', error));
}

function getVideoIdFromUrl(url) {
    var videoId = '';
    if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    }
    return videoId;
}

window.onload = loadVideos;
