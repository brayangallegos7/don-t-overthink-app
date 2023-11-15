import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
}
