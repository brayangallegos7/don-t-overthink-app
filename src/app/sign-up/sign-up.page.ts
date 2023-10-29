import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AlertController,LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  bgForm: FormGroup;


  constructor(public toastController: ToastController,public loadingController: LoadingController,public authenticationService:AuthenticationService,public router: Router, public formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    // this.signUP()
    this.bgForm = this.formBuilder.group({
      fullname:['',
        [Validators.required]
      ],
      contact:['',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        // Validators.min(10)
      ]
    ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [
       // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required,
      ],
    ],
    });
  }
  get errorControl() {
    return this.bgForm.controls;
  }
  async signUpWithGoogle(){
    const user = await this.authenticationService.GoogleAuth().then(()=>{
      this.router.navigate(['/inicio'])
    })
  }
 
  async signUP(){
    const loading = await this.loadingController.create();
    await loading.present();
    if (this.bgForm.valid) {

      const user = await this.authenticationService.registerUser(this.bgForm.value.email, this.bgForm.value.password).catch((err) => {
        this.presentToast(err)
        console.log(err);
        loading.dismiss();
      })

      if (user) {
        loading.dismiss();
        this.router.navigate(['/inicio'])
      }
    } else {
      return console.log('Please provide all the required values!');
    }
  }
/*   signUpUsingPhonenumber(contact:string){
    
    this.authenticationService.signInWithPhoneNumber(contact)
  } */
  async presentToast(message: undefined) {
    console.log(message);
    
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}  

