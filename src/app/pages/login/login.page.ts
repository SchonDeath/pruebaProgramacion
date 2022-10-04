import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //Model
  user : any = {
    usuario: '',
    password : ''
  }
  field: string = '';

  constructor(private menu: MenuController, private loadingCtrl: LoadingController, private toastCtrl: ToastController, private router: Router) { this.menu.enable(false); }
  
  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ngOnInit() { 
    this.presentLoading('<img src="../../../assets/img/logo.png">');
  }




  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if( this.user.usuario == 'ADMIN' && this.user.password == '1234'|| this.user.usuario == 'USER' && this.user.password == '1234'){
        this.field = key;
        return true;
      }
    }
    return false;
  }
  
  login(){
    if(this.validateModel(this.user)){
      this.presentToast('Bienvenido ' + this.user.usuario);
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast('Debe ingresar un usuario y contraseña válidos');
    }
  }

  register() {
    this.presentToast('Lo lamentamos, esta página esta en construcción, por favor vuelva pronto')
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }

  async presentLoading(message: string){
    const loading = await this.loadingCtrl.create({
      message: message,
      duration: 1500,
      keyboardClose: true,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
  }
}