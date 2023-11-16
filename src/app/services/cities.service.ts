import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  cities = ['Berlin', 'Prague', 'Vienna', 'Budapest'];
  constructor() { }

  getCities(): string[] {
    return this.cities;
  }
}
