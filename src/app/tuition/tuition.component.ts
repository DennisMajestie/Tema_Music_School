import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow, Autoplay, Scrollbar } from 'swiper/modules';

@Component({
  selector: 'app-tuition',
  standalone: true,
  imports: [],
  templateUrl: './tuition.component.html',
  styleUrl: './tuition.component.scss'
})
export class TuitionComponent {
  email: any = 'eaglesmusicacademy@gmail.com';
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
}
