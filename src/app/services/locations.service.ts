import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  hostels = [
    {
      location: 'Berlin',
      description: 'A vibrant hostel located in the heart of Berlin, offering comfortable dormitories and private rooms. Close to major attractions and nightlife.',
      facilities: ['Free Wi-Fi', 'Common Lounge', 'Bar', '24-hour Reception'],
      rating: 4.5
    },
    {
      location: 'Prague',
      description: 'Experience the lively atmosphere of Prague at Prague Central Hostel. Affordable accommodation with a friendly staff and cozy common areas.',
      facilities: ['Free Breakfast', 'Laundry Facilities', 'Kitchen', 'Bicycle Rental'],
      rating: 4.2
    },
    {
      location: 'Vienna',
      description: 'Immerse yourself in the cultural charm of Vienna at Vienna Downtown Hostel. Comfortable rooms and a friendly atmosphere await you.',
      facilities: ['Free City Maps', 'Garden Area', 'Shared Kitchen', 'Luggage Storage'],
      rating: 4.3
    },
    {
      location: 'Budapest',
      description: 'Explore the dynamic city of Budapest while staying at Budapest Riverside Hostel. Enjoy breathtaking views and convenient facilities.',
      facilities: ['Free Walking Tours', 'Rooftop Terrace', 'Bicycle Rental', '24-hour Check-in'],
      rating: 4.4
    }
  ];
  activeHostel = 0;
  constructor() { }

  get getHostels(): any[] {
    return this.hostels;
  }

  set setActiveCity(n: number) {
    this.activeHostel = n;
  }
}
