document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  let currentIndex = 0;

  function showSlide(index) {
    // corregimos índices fuera de rango
    if (index < 0) {
      index = 0; // slides.length - 1;
    } else if (index >= slides.length) {
      index = 6; // 0;
    }

    // ocultar todas
    slides.forEach(slide => slide.classList.remove('active'));

    // mostrar la actual
    slides[index].classList.add('active');
    currentIndex = index;
  }

  prevButton.addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });

  // por si acaso, mostramos la primera al cargar
  showSlide(0);
});
