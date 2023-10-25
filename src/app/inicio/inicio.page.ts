import { Component, OnInit } from '@angular/core';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(){}
  
  option={
    slidesPerView:1.5,
    centeredSlides: true,
    loop:true,
    spaceBetween:10,
    autoplay: {
    delay: 3000
    }
   }

}
