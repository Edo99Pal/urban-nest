import { Component, OnInit } from '@angular/core';
import { SpecialOffersService } from 'src/app/services/special-offers.service';

@Component({
  selector: 'app-special-offers-home',
  templateUrl: './special-offers-home.component.html',
  styleUrls: ['./special-offers-home.component.scss']
})
export class SpecialOffersHomeComponent implements OnInit {
  specialOffers: any = [];
  currentOfferIndex = 1;
  constructor(private service: SpecialOffersService) { }

  ngOnInit(): void {
    this.specialOffers = this.service.getSpecialOffers();
  }

  onChange(index: number) {
    this.currentOfferIndex = index;
  }
}
