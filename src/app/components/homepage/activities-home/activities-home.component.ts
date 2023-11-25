import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { PageChangerService } from 'src/app/services/page-changer.service';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
  activities: any[] = [];
  currentActivityIndex = 1;

  constructor(private service: ActivitiesService, public pageService: PageChangerService) { }

  ngOnInit(): void {
    this.activities = this.service.getEvents;
  }

  onChange(index: number) {
    this.currentActivityIndex = index;
  }

  onPageChange(n: number) {
    this.pageService.onPageChange(n);
  }
}
