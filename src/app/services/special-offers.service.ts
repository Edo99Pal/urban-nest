import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialOffersService {
  specialOffers = [
    {
      city: 'Berlin',
      offerTitle: 'Berlin Adventure Package',
      description: 'Experience the vibrant culture of Berlin with our adventure package! Includes city tours, bike rentals, and local attraction discounts.',
      validUntil: '2023-12-31',
      discountPercentage: 15
    },
    {
      city: 'Prague',
      offerTitle: 'Prague Getaway Deal',
      description: 'Enjoy a relaxing getaway in Prague! Our package includes spa access, complimentary breakfast, and a guided tour of historic landmarks.',
      validUntil: '2023-11-30',
      discountPercentage: 20
    },
    {
      city: 'Vienna',
      offerTitle: 'Vienna Cultural Experience',
      description: 'Immerse yourself in Vienna\'s rich culture! Get discounted tickets to classical concerts, museums, and exclusive local events.',
      validUntil: '2023-12-15',
      discountPercentage: 10
    },
    {
      city: 'Budapest',
      offerTitle: 'Budapest Adventure Pass',
      description: 'Explore Budapest with our adventure pass! Enjoy river cruises, thermal baths, and access to famous landmarks at discounted rates.',
      validUntil: '2023-12-10',
      discountPercentage: 25
    }
  ];
  constructor() { }

  get getSpecialOffers() {
    return this.specialOffers;
  }
}
