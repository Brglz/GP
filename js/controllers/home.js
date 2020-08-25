window.addEventListener('load', function () {
    const viewport = document.querySelector('.home-main-content-box-videos');
    let video = document.getElementById('myVideo')
    viewport.addEventListener('mouseover', function (e) {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (!isPlaying) {
            video.play();
        }
        video.play
    }, false);

    viewport.addEventListener('mouseout', async function (e) {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (isPlaying) {
            await video.pause();
            video.currentTime = 0;
        }

    }, false);
})