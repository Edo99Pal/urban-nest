import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from 'src/app/services/facilities.service';
@Component({
  selector: 'app-facilities-home',
  templateUrl: './facilities-home.component.html',
  styleUrls: ['./facilities-home.component.scss']
})
export class FacilitiesHomeComponent implements OnInit {
  highlights: any = [];
  socialSpacesActivities: any = [];
  services: any = [];
  titles = ['Highlights', "Social Spaces Activities", "Services"];

  constructor(private service: FacilitiesService) {}

  ngOnInit(): void {
    this.highlights = this.service.getHighLights();
    this.socialSpacesActivities = this.service.getSocialSpacesActivities();
    this.services = this.service.getServices();
  }
}
