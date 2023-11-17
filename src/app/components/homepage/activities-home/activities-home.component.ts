import { Component, Input, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activities-home',
  templateUrl: './activities-home.component.html',
  styleUrls: ['./activities-home.component.scss']
})
export class ActivitiesHomeComponent implements OnInit {
  activities: any[] = [];
  currentActivityIndex = 1;

  constructor(private service: ActivitiesService) { }

  ngOnInit(): void {
    this.activities = this.service.getEvents();
  }

  onChange(index: number) {
    this.currentActivityIndex = index;
  }
}
