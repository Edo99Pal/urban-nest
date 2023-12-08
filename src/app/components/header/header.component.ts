import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { MenuService } from 'src/app/services/menu.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: string[] = [];
  @Output() page = new EventEmitter<number>();

constructor(private service: MenuService, public pageService: PageChangerService, public bookingService: BookingService) { }

ngOnInit(): void {
  this.menuItems = this.service.getMenuItems;
}

onPageChange(n: number) {
  this.pageService.onPageChange(n); 
}

}
