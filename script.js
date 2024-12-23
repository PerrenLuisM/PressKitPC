document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const playlist = document.getElementById('playlist');
    const links = playlist.getElementsByTagName('li');

    for (let link of links) {
        link.addEventListener('click', function() {
            for (let item of links) {
                item.classList.remove('active');
            }
            this.classList.add('active');
            video.src = this.getAttribute('data-src');
            video.play();
        });
    }

    video.addEventListener('ended', function() {
        let current = playlist.querySelector('.active');
        let next = current.nextElementSibling;
        if (next) {
            current.classList.remove('active');
            next.classList.add('active');
            video.src = next.getAttribute('data-src');
            video.play();
        }
    });
});


