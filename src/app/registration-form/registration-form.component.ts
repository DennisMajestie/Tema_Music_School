import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {


  registrationForm: FormGroup;

  // Course Lists
  coreCourses: string[] = ['Music Theory', 'Rhythm Lessons'];
  breadthCourses: string[] = [
    'Confidence Building',
    'Ethics, Civility, & Etiquettes',
    'Communication Skills'
  ];
  selectiveCourses: string[] = ['Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'];
  electiveCourses: string[] = ['Dance', 'Karate', 'Arts and Crafts'];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      surname: ['', Validators.required],
      otherNames: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      stateOfResidence: ['', Validators.required],
      nationality: ['', Validators.required],
      stateOfOrigin: ['', Validators.required],
      programType: ['', Validators.required],
      preferredLocation: ['', Validators.required],
      preferredDays: ['', Validators.required],
      breadthCourse: ['', Validators.required],
      selectiveCourses: [[], Validators.required],
      electiveCourse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      alert('Registration Successful!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}

