let video = document.querySelector('video');
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY/-800;
    video.style.opacity = value;
})