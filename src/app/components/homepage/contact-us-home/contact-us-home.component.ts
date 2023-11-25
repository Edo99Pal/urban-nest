import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us-home',
  templateUrl: './contact-us-home.component.html',
  styleUrls: ['./contact-us-home.component.scss']
})
export class ContactUsHomeComponent implements OnInit {
  contactInfo: any = []
  constructor(private service: ContactUsService) { }

  ngOnInit(): void {
    this.contactInfo = this.service.getContactInfo;
  }
}
