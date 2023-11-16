import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccomodationComponent } from './components/accomodation/accomodation.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { BookingComponent } from './components/booking/booking.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { HeaderComponent } from './components/header/header.component';
import { LocationsHomeComponent } from './components/homepage/locations/locations-home.component';
import { BookingHomeComponent } from './components/homepage/booking-home/booking-home.component';
import { ActivitiesHomeComponent } from './components/homepage/activities-home/activities-home.component';
import { ActivityComponent } from './components/homepage/activities-home/activity/activity.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AccomodationHomeComponent } from './components/homepage/accommodation-home/accommodation-home.component';
import { FacilitiesHomeComponent } from './components/homepage/facilities-home/facilities-home.component';
@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    ActivitiesComponent,
    BookingComponent,
    ContactUsComponent,
    FacilitiesComponent,
    FaqComponent,
    HomepageComponent,
    LocationsComponent,
    ReviewsComponent,
    SpecialOffersComponent,
    HeaderComponent,
    LocationsHomeComponent,
    BookingHomeComponent,
    ActivitiesHomeComponent,
    ActivityComponent,
    CarouselComponent,
    AccomodationHomeComponent,
    FacilitiesHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
