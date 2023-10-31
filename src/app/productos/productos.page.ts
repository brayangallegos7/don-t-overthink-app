import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../models';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Producto [] = [];

  newProducto: Producto;

  enableNewProducto = false;
  
  private path = 'Productos';

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getProductos();
  }

  guardarProducto(){
    this.firestoreService.createDoc(this.newProducto,this.path,this.newProducto.id);
  }

  getProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res=> {
      this.productos = res;
    } );
  }

  deleteProducto(producto: Producto){
    this.firestoreService.deleteDoc(this.path,producto.id)
  }

  nuevo(){
    this.enableNewProducto = true;
    this.newProducto = {
      nombre: '',
      precioNormal: null,
      precioReducido: null,
      foto: '',
      id: this.firestoreService.getId(),
      fecha: new Date()
    };
  }
}
