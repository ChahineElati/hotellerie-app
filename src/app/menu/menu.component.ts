import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: NbMenuItem[] = [
    {
      title: 'Chambres',
      icon: 'home-outline',
    },
    {
      title: 'Menus',
      icon: 'list-outline',
    },
    {
      title: 'Services',
      icon: 'smiling-face-outline',
    },
    {
      title: 'Évènements',
      icon: 'calendar-outline',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
