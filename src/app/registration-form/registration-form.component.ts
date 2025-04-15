import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormserviceService } from '../formservice.service';
import { Select2 } from 'ng-select2-component';
import { FirestoreService, User } from '../firestore.service';


// declare var squad: any;


@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Select2, RouterOutlet, FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {

  form: FormGroup;
  maxSelectable = 2;
  selectedCount = 0;
  courseList = ['Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'];

  formState: any;
  formCountry: any;
  formGender: any;
  formLocation: any;
  formDays: any;
  formProgram: any;
  formStateResidence: any;
  sendThisMessage: any;
  formCourse: any;

  constructor(private fb: FormBuilder, private route: Router, private forms: FormserviceService, public fireservice: FirestoreService) {
    console.log(this.fireservice.messages);
    this.formState = this.forms.states;
    this.formCountry = this.forms.countries;
    this.formGender = this.forms.genders;
    this.formLocation = this.forms.locations;
    this.formDays = this.forms.days;
    this.formProgram = this.forms.programs;
    this.formStateResidence = this.forms.states;
    this.formCourse = this.forms.courses
    this.form = this.fb.group({
      selectiveCourses: this.fb.array([])
    });
    this.initializeForm();

  }
  regForm!: FormGroup;

  users: [] = [];

  _search(e: any) {

  }
  initializeForm(): void {
    const coursesArray = this.form.get('selectiveCourses') as FormArray;
    this.courseList.forEach(() => coursesArray.push(this.fb.control(false)));
  }
  get selectiveCourses(): FormArray {
    return this.form.get('selectiveCourses') as FormArray;
  }

  onCheckboxChange(): void {
    const selectedCount = this.selectiveCourses.value.filter((v: boolean) => v).length;
    if (selectedCount >= this.maxSelectable) {
      this.selectiveCourses.controls.forEach(control => {
        if (!control.value) control.disable();
      });
    } else {
      this.selectiveCourses.controls.forEach(control => control.enable());
    }
  }


  ngOnInit(): void {
    this.regForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      otherName: [''],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      stateOfResidence: ['', Validators.required],
      nationality: ['', Validators.required],
      stateOfOrigin: ['', Validators.required],
      programType: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      preferredDays: ['', Validators.required],
      breadthCourse: ['', Validators.required],
      coreCourse: [true, Validators.required],
      electiveCourse: ['', Validators.required],
      selectiveCourses: this.fb.array([])
    });
    this.initializeForm();
  }



  sendUser() {
    if (this.regForm.invalid) {
      console.error('All fields are required!');
      return;
    }
    const user: User = this.regForm.value;
    this.fireservice.addUser(user)
      .then(() => console.log('User added successfully!'))
      .catch(error => console.error('Error adding user:', error));
  }


  selectedCourses: string[] = [];

  toggleSelection(value: string) {
    const index = this.selectedCourses.indexOf(value);

    if (index > -1) {
      // Uncheck it
      this.selectedCourses.splice(index, 1);
    } else if (this.selectedCourses.length < 2) {
      // Check it
      this.selectedCourses.push(value);
      console.log(this.selectedCourses);
    }
  }


}

