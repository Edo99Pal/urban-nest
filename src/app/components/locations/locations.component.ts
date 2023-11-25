import { Component, Input, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit { 
  hostels: any[] = [];
  @Input() currentHostelIndex = 1;

  constructor(public service: LocationsService, public pageService: PageChangerService) { }

  ngOnInit(): void {
    this.hostels = this.service.getHostels;
    console.log(this.hostels);
  }
  
  onChange(index: number) {
    this.currentHostelIndex = index;
  }
}
