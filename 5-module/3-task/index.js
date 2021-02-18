function initCarousel() {
  const carouselContainer = document.querySelector('.carousel');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  console.log(`.carousel__arrow_right ${arrowRight}`);
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  console.log(`.carousel__arrow_left ${arrowLeft}`);
  const carousel = document.querySelector('.carousel__inner');
  console.log(`.carousel__inner ${carousel}`);
  const slides = carousel.querySelectorAll('.carousel__slide');
  console.log(`.carousel__slide ${slides}`);
  const slide = carousel.querySelector('.carousel__slide');
  console.log(`.carousel__slide ${slide}`);
  const slideWidth = slide.offsetWidth;
  console.log(`slideWidth ${slideWidth}`);

  let slideIndex = 1;
  const firstSlideIndex = 1;
  checkRightButton(arrowRight);
  checkLeftButton(arrowLeft);

  carouselContainer.addEventListener('click', function(event) {
    if (event.target.closest('.carousel__arrow_right')) {
      nextSlide();
      checkRightButton(arrowRight);
      checkLeftButton(arrowLeft);
    }
    if (event.target.closest('.carousel__arrow_left')) {
      prevSlide();
      checkLeftButton(arrowLeft);
      checkRightButton(arrowRight);
    }
  })

  function nextSlide() {
    carousel.style.transform = `translateX(${-1 * slideWidth * slideIndex}px)`;
    slideIndex = slideIndex + 1;
  }

  function prevSlide() {
    carousel.style.transform = `translateX(${-1 * slideWidth * (slideIndex - 2)}px)`;
      slideIndex = slideIndex - 1;

  }

  function checkRightButton(button) {
    if (slideIndex === slides.length) {
      button.style.display = 'none';
      return;
    }
    button.style.display = '';
  }

  function checkLeftButton(button) {
    if (slideIndex === firstSlideIndex) {
      button.style.display = 'none';
      return;
    }
    button.style.display = '';
  }
}
