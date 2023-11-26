import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/inicio/', icon: 'home' },
    { title: 'News', url: '/noticias/', icon: 'newspaper' },
    { title: 'Store', url: '/tienda/', icon: 'cart' },
    { title: 'About us', url: '/acerca/', icon: 'information' },
    { title: 'Contact', url: '/contacto/', icon: 'call' },
    { title: 'Products', url: '/productos/', icon: 'file-tray-stacked' },
    { title: 'Location', url: '/location/', icon: 'location' },
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
