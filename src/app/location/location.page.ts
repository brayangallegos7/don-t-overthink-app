import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoogleMap, Marker} from '@capacitor/google-maps'
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map')mapRef:ElementRef;
  map:GoogleMap;

  constructor(private modalCtrl: ModalController,private authenticationService:AuthenticationService,private router: Router) { }

  ionViewDidEnter(){
    this.createMap();
  }

   async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-map', // Unique identifier for this map instance
      element: this.mapRef.nativeElement, // reference to the capacitor-google-map element
      apiKey: environment.mapsKey, // Your Google Maps API Key
      config: {
        center: {
          // The initial position to be rendered by the map
          lat: 21.42412,
          lng: -104.89836,
        },
        zoom: 13, // The initial zoom level to be rendered by the map
      },
      
    }); 

    this.addMarkers();
   }

   async addMarkers(){
      const markers: Marker []=[
        {
          coordinate:{
            lat: 21.42412 ,
            lng: -104.89836,
          },
          title: 'Don´t Overthink',
          snippet: 'el mejor videojuego creado por pjproductions'
        }
      ];
      
      await this.map.addMarkers(markers);

   }

   signOut(){

    this.authenticationService.signOut().then(() =>{
      this.router.navigate(['/landing'])
    })
   }
  ngOnInit() {
  }

  
}
