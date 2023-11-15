import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  bgForm:FormGroup ;

  loading : any;
  
  constructor(public toastController: ToastController,public loadingCtrl: LoadingController, public alertController: AlertController, public loadingController: LoadingController, public authenticationService: AuthenticationService, public router: Router, public formBuilder: FormBuilder) 
   {

    }

  ngOnInit() {
    this.bgForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ]
      ],
    });
  }

  async login() {
    this.showLoading();
    // console.log(this.email + this.password);
    if (this.bgForm.valid) {

      //  await  loading.dismiss();
      const user = await this.authenticationService.loginUser(this.bgForm.value.email, this.bgForm.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        this.loading.dismiss();
      })

      if (user) {
        this.loading.dismiss();
        this.router.navigate(['/inicio'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }

  }
  get errorControl() {
    return this.bgForm.controls;
  }

  async presentToast(message: undefined) {
    console.log(message);

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
  
  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Espere un momento..',
    });

    this.loading.present();
  }
  }


