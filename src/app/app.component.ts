import { Component, OnInit } from '@angular/core';
import { PageChangerService } from './services/page-changer.service';
import { LocationsService } from './services/locations.service';
import { ActivitiesService } from './services/activities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'urban-nest';

  constructor(public pageService: PageChangerService, public locationsService: LocationsService, public activitiesService: ActivitiesService) { }

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    this.pageService.onPageChange(page);
  }
}
