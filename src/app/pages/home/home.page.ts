import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  pageTitle = 'Inicio';
  isNotHome = true;
  

  constructor(private menu: MenuController) { this.menu.enable(true) }

  ionViewDidEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    
  }
  
  
  
}
