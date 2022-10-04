import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pcarga',
  templateUrl: './pcarga.page.html',
  styleUrls: ['./pcarga.page.scss'],
})
export class PcargaPage implements OnInit {
  pageTitle = 'Bienvenido';
  isNotHome = true;

  constructor() { }

  ngOnInit() {
  }

}
