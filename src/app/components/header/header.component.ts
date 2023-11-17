import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: string[] = [];

constructor(private service: MenuService) { }

ngOnInit(): void {
  this.menuItems = this.service.getMenuItems();
}

}