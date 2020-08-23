window.addEventListener('load', function () {
    let viewport = document.getElementsByClassName('home-main-content-box home-main-content-box-videos')[0]
    let video = document.getElementById('myVideo')
    viewport.addEventListener('mouseover', function () {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (!isPlaying) {
            video.play();
        }
    }, false);
    viewport.addEventListener('mouseout', function () {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (!isPlaying) {
            video.load()
        }

    }, false);
})