import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
register();

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private authenticationService:AuthenticationService,private router: Router){}
  email :any
  option={
    slidesPerView:1.5,
    centeredSlides: true,
    loop:true,
    spaceBetween:10,
    autoplay: {
    delay: 3000
    }
   }
  ngOnInit(): void {
   
    this.authenticationService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    })
  }
 
   signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
}
