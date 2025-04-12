import { Component, } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from 'swiper/modules';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  // ngAfterViewInit(): void {

  //   new Swiper('.swiper2', {
  //     modules: [Navigation, Pagination, Autoplay, EffectCoverflow, Scrollbar],
  //     effect: 'coverflow',
  //     grabCursor: true,
  //     centeredSlides: true,
  //     loop: true,
  //     speed: 800,
  //     slidesPerView: 'auto',
  //     coverflowEffect: {
  //       rotate: 50,
  //       stretch: 0,
  //       depth: 100,
  //       modifier: 1,
  //       slideShadows: true,
  //     },
  //     autoplay: {
  //       delay: 4000,
  //       disableOnInteraction: false,
  //     },
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });

  ngAfterViewInit(): void {
    new Swiper('.swiper2', {
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay, Scrollbar],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      speed: 800,
      slidesPerView: 'auto',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },

      breakpoints: {

        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        692: {
          slidesPerView: 1,
          spaceBetween: 30,
        },

        795: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        997: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

      }
    });
  }

  // swiperConfig = {
  //   effect: 'coverflow',
  //   grabCursor: true,
  //   centeredSlides: true,
  //   loop: true,
  //   speed: 800,
  //   slidesPerView: 'auto',
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   pagination: {
  //     clickable: true,
  //   },
  //   navigation: true,
  //   scrollbar: {
  //     draggable: true,
  //   },
  //   breakpoints: {
  //     692: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     },
  //     700: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     795: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },
  //     997: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //     },
  //     1500: {
  //       slidesPerView: 5,
  //       spaceBetween: 30,
  //     },
  //   },
  // };
}


