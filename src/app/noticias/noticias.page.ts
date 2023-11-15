import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }

  ngOnInit() {
  }

  signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
}
