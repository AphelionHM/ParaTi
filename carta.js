
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fotos img").forEach(img => {
        img.classList.add("loaded");

        img.addEventListener("click", () => {
            const fullscreenDiv = document.createElement("div");
            fullscreenDiv.classList.add("fullscreen-img");
            
            const imgClone = document.createElement("img");
            imgClone.src = img.src;
            
            fullscreenDiv.appendChild(imgClone);
            document.body.appendChild(fullscreenDiv);
            
            setTimeout(() => fullscreenDiv.classList.add("show"), 10);

            fullscreenDiv.addEventListener("click", () => {
                fullscreenDiv.classList.remove("show");
                setTimeout(() => document.body.removeChild(fullscreenDiv), 300);
            });
        });
    });
});


