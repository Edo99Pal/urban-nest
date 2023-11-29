import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocationsService } from './locations.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  guests: number[] = [1, 2, 3, 4, 5, 6];
  formQuestions: any[] = [
    {
      title: 'Tell us your full name'
    },
    {
      title: 'What\'s the location you plan to stay in?'
    },
    {
      title: 'Room Type'
    },
    {
      title: 'What\'s the number of guests?'
    },
    {
      title: 'Start Date'
    },
    {
      title: 'End Date'
    },
    {
      title: 'Do you want breakfast?'
    },
    {
      title: 'Confirm?'
    }
  ];

  booking: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  roomTypes = ['Dormitory Room', 'Private Room (single)', 'Private Room (Double)', 'Family Room']
  
  locations: any[] = [];

  showed = false;

  constructor(private _locationsService: LocationsService) { 
    this.locations = this._locationsService.getHostels;
  }

  get getGuests(): number[] {
    return this.guests;
  }
  get getFormQuestions(): any[] {
    return this.formQuestions;
  }
  get getRoomTypes(): string[] {
    return this.roomTypes;
  }

  set setBooking(booking: any) {
    this.booking = booking;
  }

  bookingNotNull(): boolean {
    return this.booking.value;
  }

  show() {
    this.showed = true;
  }
}
