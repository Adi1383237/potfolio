document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            lightbox.style.display = "block";
            const img = document.createElement("img");
            img.src = item.src;
            img.classList.add("lightbox-content");
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
            const close = document.createElement("span");
            close.classList.add("close");
            close.innerHTML = "&times;";
            lightbox.appendChild(close);

            close.addEventListener("click", () => {
                lightbox.style.display = "none";
            });
        });
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;
        lightbox.style.display = "none";
    });
});