export default function initLazy() {
    const images = document.querySelectorAll('img');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const fetchImage = (url) => {
        console.log(url)
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = url;
          image.onload = resolve;
          image.onerror = reject;
        });
      }

      const loadImage = (image) => {
        const src = image.dataset.src;
        fetchImage(src).then(() => {
          image.src = src;
        })
      }
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      console.log(entry.intersectionRatio);
      loadImage(entry.target)
    }
  })
}
const observer = new IntersectionObserver(handleIntersection, options);
images.forEach(img => {
  observer.observe(img);
})

$(document).ready(() => {
  $('.slider-for__slide, .fone').each((index, el) => {
    const $image = $(el);
    const realSrc = $image.attr('data-src');
    $image.attr('style', realSrc);
  });
});
}