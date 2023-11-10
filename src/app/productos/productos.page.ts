import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Producto } from '../models';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Producto [] = [];

  newProducto: Producto;

  loading : any;

  enableNewProducto = false;

  newImage= '';
  
  private path = 'Productos';

  constructor(public firestoreService: FirestoreService,
              public loadingCtrl: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.getProductos();
  }

  guardarProducto(){
    this.showLoading();
    this.firestoreService.createDoc(this.newProducto,this.path,this.newProducto.id).then(res=>{
    this.loading.dismiss();
    this.presentToast('Guardado con exito');
    }).catch(error => {
      this.presentToast('No se pudo guardar');
    });
  }

  getProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res=> {
      this.productos = res;
    } );
  }

  async deleteProducto(producto: Producto){
      const alert = await this.alertController.create({
        cssClass: 'normal',
        header: 'Advertencia',
        message: '¿Estas seguro de eliminar el producto?',
        buttons: [{
          text:'cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) =>{
            console.log('confirm cancel: blah')
          } 
          },{ 
          text:'Ok',
          cssClass: 'normal',
          handler: (blah) =>{
            console.log('confirm okay');
            this.firestoreService.deleteDoc(this.path,producto.id).then(res=>{
            this.alertController.dismiss();
            this.presentToast('Eliminado con exito');
          }).catch(error => {
            this.presentToast('No se pudo eliminar');
          });
          }

        }],
      });
      await alert.present();
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

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espere un momento..',
    });

    this.loading.present();
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      cssClass: 'normal',
    });

    await toast.present();
  }

  newImageUpload(event: any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = ((image) =>{
        this.newImage = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
