document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = document.querySelectorAll(".lazy-video");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (video.dataset.src) {
            video.src = video.dataset.src; // Assigna el src al vídeo
            video.removeAttribute("data-src"); // Elimina l'atribut data-src
          }
          observer.unobserve(video); // Deixa d'observar aquest vídeo
        }
      });
    });

    lazyVideos.forEach(video => observer.observe(video)); // Observa tots els vídeos
  } else {
    // Fallback per a navegadors antics
    lazyVideos.forEach(video => {
      if (video.dataset.src) {
        video.src = video.dataset.src; // Assigna el src al vídeo
      }
    });
  }
});
