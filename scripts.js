function filterImages(category) {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function (image) {
        if (category === 'all') {
            image.classList.add('show');
        } else {
            if (image.classList.contains(category)) {
                image.classList.add('show');
            } else {
                image.classList.remove('show');
            }
        }
    });
}

// Beim Laden der Seite alle Bilder anzeigen
window.onload = function() {
    filterImages('all');
}