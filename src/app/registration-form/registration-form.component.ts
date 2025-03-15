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

  RegistrationForm: any = FormGroup;


  countryList: string[] = [
    'Nigeria', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany',
    'France', 'India', 'China', 'Brazil', 'Japan', 'South Africa'
  ];
  statesList: string[] = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
    'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
    'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
    'Federal Capital Territory (FCT)'
  ];

  form: FormGroup;
  maxSelectable = 2; // Max checkboxes allowed
  selectedCount = 0;
  courseList = ['Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'];

  // form: FormGroup<{ selectiveCourses: FormArray<FormControl<boolean | null>>; }>;


  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      selectiveCourses: this.fb.array([])  // ✅ Initialize FormArray

    });

    this.initializeForm();
  }

  initializeForm(): void {
    const coursesArray = this.form.get('selectiveCourses') as FormArray;
    this.courseList.forEach(() => coursesArray.push(this.fb.control(false)));
  }

  get selectiveCourses(): FormArray {
    return this.form.get('selectiveCourses') as FormArray;
  }

  get isMaxReached(): boolean {
    return this.selectiveCourses.value.filter((v: boolean) => v).length >= this.maxSelectable;
  }

  onCheckboxChange(): void {
    if (this.isMaxReached) {
      // ✅ Disable all checkboxes when max is reached
      this.selectiveCourses.controls.forEach(control => {
        if (!control.value) control.disable(); // Disable unchecked boxes
      });
    } else {
      // ✅ Enable all checkboxes if max is not reached
      this.selectiveCourses.controls.forEach(control => control.enable());
    }
  }


  ngOnInit(): void {
    this.RegistrationForm = this.fb.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      otherName: ['', Validators.required],
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
      coreCourse: ['', Validators.required],
      electiveCourse: ['', Validators.required],
      selectiveCourse: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.RegistrationForm.valid) {
      console.log(this.RegistrationForm.value);
      alert('Form submitted successfully!');
    }
  }


}