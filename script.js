document.querySelectorAll('.video-wrapper video').forEach(video => {
    video.addEventListener('click', function() {
        const videoSrc = this.getAttribute('src');
        const overlay = document.getElementById('overlay');
        const overlayVideo = document.getElementById('overlay-video');
        
        overlayVideo.setAttribute('src', videoSrc);
        overlay.style.display = 'flex';
        overlayVideo.play();
    });
});

document.getElementById('close-overlay').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const overlayVideo = document.getElementById('overlay-video');
    
    overlayVideo.pause();
    overlayVideo.removeAttribute('src');
    overlay.style.display = 'none';
});