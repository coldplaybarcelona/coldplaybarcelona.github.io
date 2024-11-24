document.addEventListener("DOMContentLoaded", function () {
  const lazyVideos = document.querySelectorAll(".lazy-video");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          if (video.dataset.src) {
            video.src = video.dataset.src;
            video.removeAttribute("data-src");
          }
          observer.unobserve(video);
        }
      });
    });

    lazyVideos.forEach(video => observer.observe(video));
  } else {
    // Fallback per a navegadors antics
    lazyVideos.forEach(video => {
      if (video.dataset.src)
