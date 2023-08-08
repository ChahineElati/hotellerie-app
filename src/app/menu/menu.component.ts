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
      link: 'chambres',
    },
    {
      title: 'Menus',
      icon: 'list-outline',
      link: 'menus',
    },
    {
      title: 'Services',
      icon: 'smiling-face-outline',
      link: 'services',
    },
    {
      title: 'Évènements',
      icon: 'calendar-outline',
      link: 'evenements',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
