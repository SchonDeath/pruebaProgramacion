import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Viajar', url: '/viajar', icon: 'car' },
    { title: 'Perfil', url: '/perfil/', icon: 'person-circle' },
    { title: 'Conversor', url: '/conversor', icon: 'cash' },
    { title: 'About', url: '/about', icon: 'help-buoy' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'exit' },
  ];
  
  public labels = ['DuocUC','Correo'];
  constructor() {}
}
