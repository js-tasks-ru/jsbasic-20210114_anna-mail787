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
    const FIRST_SLIDE_INDEX = 0;
    let currentSlideIndex = 0;


    const nextSlide = () => {
      currentSlideIndex = currentSlideIndex + 1;
      startSlider();
    }

    const prevSlide = () => {
      currentSlideIndex = currentSlideIndex - 1;
      startSlider();
    }

    this.elem.addEventListener('click', (evt) => {
      console.log(evt.target.closest);
      if (evt.target.closest('.carousel__arrow_right')) {
        nextSlide();
      }
      if (evt.target.closest('.carousel__arrow_left')) {
        prevSlide();
      }
      if (evt.target.closest('.carousel__button')) {
        console.log(currentSlideIndex);
        console.log(this.slides[currentSlideIndex].id);
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          /*detail: this.slides[currentSlideIndex].id,*/
          detail: evt.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        }))
      }
    })

    const checkRightButton = (button) => {
      if (currentSlideIndex === slides.length - 1) {
        button.style.display = 'none';
        return;
      }
      button.style.display = '';
    }

    const checkLeftButton = (button) => {
      if (currentSlideIndex === FIRST_SLIDE_INDEX) {
        button.style.display = 'none';
        return;
      }
      button.style.display = '';
    }

    const startSlider = () => {
      let slideWidth = currentSlideIndex * -carousel.offsetWidth;
      carousel.style.transform = `translateX(${slideWidth}px)`;
      checkRightButton(arrowRight);
      checkLeftButton(arrowLeft);
    }
    startSlider();
  }
}
