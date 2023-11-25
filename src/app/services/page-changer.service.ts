import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageChangerService {
  page: number = 0;
  location: number = 0;
  constructor() { }

  onPageChange(n: number, location?: number) {
    this.page = n;
    location ? this.location = location : null;
  }

  get getLocation() {
    return this.location;
  }
}
