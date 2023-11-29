import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class PageChangerService {
  page: number = 0;
  location: number = 0;
  constructor(private _bookingService: BookingService) {
  }

  onPageChange(n: number, location?: number) {
    this.page = n;
    location ? this.location = location : null;
    this.page == 2 ? this._bookingService.show() : null;
  }

  get getLocation() {
    return this.location;
  }
}
