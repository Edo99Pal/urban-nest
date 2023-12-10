import { Component, Input, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq-home',
  templateUrl: './faq-home.component.html',
  styleUrls: ['./faq-home.component.scss']
})
export class FaqHomeComponent implements OnInit {
  @Input() page = false;
  faq: any =  [];
  constructor(private service: FaqService) { }

  ngOnInit(): void {
    this.faq = this.service.getFaq;
  }
}
