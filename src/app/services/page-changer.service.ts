import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class PageChangerService {
  page: number = 0;
  constructor(private _bookingService: BookingService) {
  }

  onPageChange(n: number) {
    this.page = n;
    this.page == 2 ? this._bookingService.show() : null;
    window.scrollTo({
      top: 0
    });
  }

}
