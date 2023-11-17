import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.scss']
})
export class BookingHomeComponent implements OnInit {
  guests: number[] = [];
  questions: any[] = [];
  roomTypes: string[] = [];
  currentQuestionIndex: number = 0;
  bookingForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    startDate: new FormControl(new Date(), [Validators.required]),
    endDate: new FormControl(new Date(), [Validators.required]),
    roomType: new FormControl('', [Validators.required]),
    nOfGuests: new FormControl(0, [Validators.required])

  })
  today: Date = new Date();
  submitRes: boolean = false;

  constructor(private service: BookingService) { }

  ngOnInit(): void {
    this.guests = this.service.getGuests();
    this.questions = this.service.getFormQuestions();
    this.questions.push({ title: 'Thank you!'});
    this.roomTypes = this.service.getRoomTypes();
  }

  onChangeStartDate(): void {
    this.bookingForm.get('endDate')?.setValue(this.bookingForm.get('startDate')?.value || new Date());
  }
  onSubmitRes() {
    this.submitRes = true;
    this.currentQuestionIndex = 5;
    console.log("Data: ", this.bookingForm.get('fullName')?.value, "\n", this.bookingForm.get('startDate')?.value, "\n", this.bookingForm.get('endDate')?.value, "\n", this.bookingForm.get('nOfGuests')?.value);
  }
  onChangeQuestion(direction: string) {
    if(direction == 'back') this.currentQuestionIndex--;
    else this.currentQuestionIndex++;
    console.log("currentQuestionIndex: ", this.currentQuestionIndex);
  }
  fullNameValidator(): any {
    let fullName = this.bookingForm.get('fullName') ? this.bookingForm.get('fullName')?.value?.toString() : '';
    return typeof(fullName) != 'undefined' ? fullName.split(' ')[1].length > 0   : false;
  }
  checkValid(index: number) {
    if(index == 0) return this.bookingForm.controls['fullName'].valid && this.fullNameValidator();
    if(index == 1) return this.bookingForm.controls['startDate'].valid;
    if(index == 2) return this.bookingForm.controls['endDate'].valid;
    if(index == 3) return this.bookingForm.controls['roomType'].valid && this.bookingForm.get('roomType')?.value != '';
    if(index == 4) return this.bookingForm.controls['nOfGuests'].valid && this.bookingForm.get('nOfGuests')?.value != 0;
    else return false;
  }
}
