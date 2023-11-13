import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links = [
    {
      link: '',
      icon: 'home',
      title: 'Inicio'
    },
    {
      link: 'about',
      icon: 'info',
      title: 'Acerca de'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  salute(): void {
    console.log("hola")
  }

}
