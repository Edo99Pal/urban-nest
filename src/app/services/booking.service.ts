import { Injectable } from '@angular/core';

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
      title: 'Start Date'
    },
    {
      title: 'End Date'
    },
    {
      title: 'Room Type'
    },
    {
      title: 'What\'s the number of guests?'
    }
  ];

  roomTypes = ['Dormitory Room', 'Private Room (single)', 'Private Room (Double)', 'Family Room']

  constructor() { }

  get getGuests(): number[] {
    return this.guests;
  }
  get getFormQuestions(): any[] {
    return this.formQuestions;
  }
  get getRoomTypes(): string[] {
    return this.roomTypes;
  }
}
