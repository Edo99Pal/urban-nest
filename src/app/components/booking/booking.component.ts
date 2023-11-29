import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { BehaviorSubject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  booking: any = { };
  price: number = 0;
  edit: boolean = false;

  guests: number[] = [];
  roomTypes: string[] = [];
  today: Date = new Date();
  submitRes: boolean = false;
  locations: any[] = [];

  constructor(public service: BookingService) {
    this.service.booking.subscribe(value => {
      this.booking = value;
    }); 
    this.price = Math.ceil(Math.abs(this.booking.endDate - this.booking.startDate) / (1000 * 60 * 60 * 24)) * (Math.random() * 60 + 55.5) * this.booking.nOfGuests;
  }

  ngOnInit(): void {
    this.guests = this.service.getGuests;
    this.roomTypes = this.service.getRoomTypes;
    this.locations = this.service.locations;
  }

  getPrice(n: number) {
    this.price = n;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  getAvailableEndDate() {
    let ret = new Date();
    ret.setDate(this.booking.startDate.getDate() + 1);
    return ret;
  }

  onCancelEdit() {
    this.toggleEdit();
    this.booking = this.service.booking;
  }

  onEdit() {
    this.toggleEdit();
    this.service.booking.next(this.booking);
  }

  onDelete() {
  this.service.booking.next(null);
  this.service.booking.subscribe(value => {
    this.booking = value;
  }); 
  }
}
