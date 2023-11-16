import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-locations-home',
  templateUrl: './locations-home.component.html',
  styleUrls: ['./locations-home.component.scss']
})
export class LocationsHomeComponent implements OnInit {
  cities: string[] = [];

  constructor(private service: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.service.getCities();
  }
}
