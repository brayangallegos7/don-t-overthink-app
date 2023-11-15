import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(private authenticationService:AuthenticationService,private router: Router) { }
   

  ngOnInit() {
  }
  
  signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
}
