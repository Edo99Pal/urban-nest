import { Component, Input, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() hostel: any = { };

  constructor(private service: LocationsService) { }

  ngOnInit(): void {
  }

}
