document.addEventListener('DOMContentLoaded', function () {
  const slidesND = document.querySelectorAll('#slider-nd .slide-nd');
  const prevND = document.getElementById('prev-nd');
  const nextND = document.getElementById('next-nd');

  let indexND = 0;

  function showNaughtyDog(i) {
    if (i < 0) i = slidesND.length - 1;
    if (i >= slidesND.length) i = 0;

    slidesND.forEach(slide => slide.classList.remove('active'));
    slidesND[i].classList.add('active');
    indexND = i;
  }

  prevND.addEventListener('click', () => showNaughtyDog(indexND - 1));
  nextND.addEventListener('click', () => showNaughtyDog(indexND + 1));

  showNaughtyDog(0);
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('#slider-xbox .slide');
  const prevButton = document.getElementById('prev-xbox');
  const nextButton = document.getElementById('next-xbox');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;

    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
    currentIndex = index;
  }

  prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
  nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

  showSlide(0);
});

