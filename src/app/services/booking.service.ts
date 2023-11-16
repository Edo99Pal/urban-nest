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
      title: 'What\'s the number of guests?'
    }
  ]

  constructor() { }

  getGuests(): number[] {
    return this.guests;
  }
  getFormQuestions(): any[] {
    return this.formQuestions;
  }
}
