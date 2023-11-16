import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [ MenuService ]
})
export class HomepageComponent implements OnInit {
  menuItems: string[] = [];

  constructor(private service: MenuService) { }

  ngOnInit() {
    this.menuItems = this.service.getMenuItems();
  }
}
