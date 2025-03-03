
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

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musica");
    audio.volume = 0.5; // Ajusta el volumen (0.0 a 1.0)

    // Intentar reproducir el audio al cargar la página
    const playAudio = () => {
        audio.play().catch(() => {
            console.log("Autoplay bloqueado, esperando interacción.");
        });
    };

    // Ejecutar la reproducción cuando el usuario haga clic en cualquier parte de la página
    document.body.addEventListener("click", playAudio, { once: true });
});
