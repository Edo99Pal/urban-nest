import { Component, OnInit } from '@angular/core';
import { PageChangerService } from './services/page-changer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'urban-nest';

  constructor(public pageService: PageChangerService) { }

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    this.pageService.onPageChange(page);
  }
}
