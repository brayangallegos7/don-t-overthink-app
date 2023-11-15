import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
}
