import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactInformation = [
    {
      city: "Berlin",
      email: "berlin@hostelchain.com",
      phoneNumber: "+49 30 1234 5678",
      address: "123 Berlin Street, Berlin, Germany",
      operatingHours: "Monday to Sunday: 9:00 AM - 6:00 PM"
    },
    {
      city: "Prague",
      email: "prague@hostelchain.com",
      phoneNumber: "+420 123 456 789",
      address: "456 Prague Avenue, Prague, Czech Republic",
      operatingHours: "Monday to Sunday: 9:00 AM - 6:00 PM"
    },
    {
      city: "Vienna",
      email: "vienna@hostelchain.com",
      phoneNumber: "+43 1 2345 6789",
      address: "789 Vienna Road, Vienna, Austria",
      operatingHours: "Monday to Sunday: 9:00 AM - 6:00 PM"
    },
    {
      city: "Budapest",
      email: "budapest@hostelchain.com",
      phoneNumber: "+36 1 234 5678",
      address: "101 Budapest Boulevard, Budapest, Hungary",
      operatingHours: "Monday to Sunday: 9:00 AM - 6:00 PM"
    }
  ];
  constructor() { }

  getContactInfo() {
    return this.contactInformation;
  }
}
