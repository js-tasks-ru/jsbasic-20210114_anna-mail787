import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.render(slides);
    this.initCarousel();
  }

  render(slides) {
    const carouselSlides = slides.map(slide => {
      return `
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `
    }).join('');
    this.elem = document.createElement('div');
    this.elem.classList.add('carousel');
    this.elem.innerHTML = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
        ${carouselSlides}
      </div>
    `
  }

  initCarousel() {
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const carousel = this.elem.querySelector('.carousel__inner');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const slide = this.elem.querySelector('.carousel__slide');

    let slideIndex = 0;
    const FIRST_SLIDE_INDEX = 0;

    startSlider();

    function startSlider() {
      let slideWidth = slideIndex * -carousel.offsetWidth;
      carousel.style.transform = `translateX(${slideWidth}px)`;
      checkRightButton(arrowRight);
      checkLeftButton(arrowLeft);
    }

    this.elem.addEventListener('click', function(event) {
      console.log(event.target);
      if (event.target.closest('.carousel__arrow_right')) {
        nextSlide();
      }
      if (event.target.closest('.carousel__arrow_left')) {
        prevSlide();
      }
    })

    function nextSlide() {
      slideIndex = slideIndex + 1;
      startSlider();
    }

    function prevSlide() {
      slideIndex = slideIndex - 1;
      startSlider();
    }

    function checkRightButton(button) {
      if (slideIndex === slides.length - 1) {
        button.style.display = 'none';
        return;
      }
      button.style.display = '';

    }

    function checkLeftButton(button) {
      if (slideIndex === FIRST_SLIDE_INDEX) {
        button.style.display = 'none';
        return;
      }
      button.style.display = '';
    }
  }
}
