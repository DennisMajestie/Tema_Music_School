import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormserviceService } from '../formservice.service';
import { Select2 } from 'ng-select2-component';
// import { FirestoreService, User } from '../firestore.service';
// import { RegFormService } from '../reg-form.service';


// declare var squad: any;


@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, Select2, RouterOutlet, FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})

export class RegistrationFormComponent implements OnInit {

  regForm: FormGroup = new FormGroup({
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    otherName: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormGroup('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    stateOfResidence: new FormControl('', Validators.required),
    nationality: new FormControl('', Validators.required),
    stateOfOrigin: new FormControl('', Validators.required),
    programType: new FormGroup('', Validators.required),
    preferredLocation: new FormControl('', Validators.required),
    preferredDays: new FormControl('', Validators.required),
    breadthCourse: new FormControl('', Validators.required),
    coreCourse: new FormControl('', Validators.required),
    electiveCourse: new FormControl('', Validators.required),
    selectiveCourses: new FormControl('', Validators.required),
  });

  formState: any;
  formCountry: any;
  formGender: any;
  formLocation: any;
  formDays: any;
  formProgram: any;
  formStateResidence: any;
  sendThisMessage: any;
  formSelective: any;


  constructor(public forms: FormserviceService) {
    this.formState = this.forms.states;
    this.formCountry = this.forms.countries;
    this.formGender = this.forms.genders;
    this.formLocation = this.forms.locations;
    this.formDays = this.forms.days;
    this.formProgram = this.forms.programs;
    this.formSelective = this.forms.selectiveCourses;
    this.formStateResidence = this.forms.states;
  }

  dayList = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    'Sunday'
  ];
  selectiveCourses = ['Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'];

  ngOnInit(): void {


  }

  submit() {
    console.log(this.regForm.value)
  }

  _search(e: any) {

  }

  // selectedCourses: string[] = [];

  // toggleSelection(value: string) {
  //   const index = this.selectedCourses.indexOf(value);

  //   if (index > -1) {
  //     // Uncheck it
  //     this.selectedCourses.splice(index, 1);
  //   } else if (this.selectedCourses.length < 2) {
  //     // Check it
  //     this.selectedCourses.push(value);

  //   }

  // }
}
// export class RegistrationFormComponent implements OnInit {

//   form: FormGroup;

//   courseList = ['Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'];

//   formState: any;
//   formCountry: any;
//   formGender: any;
//   formLocation: any;
//   formDays: any;
//   formProgram: any;
//   formStateResidence: any;
//   sendThisMessage: any;
//   formSelective: any;




//   constructor(private fb:
//     FormBuilder, public alert: RegFormService,
//     private route: Router,
//     private forms: FormserviceService,
//     public fireservice: FirestoreService) {

//     console.log(this.fireservice.messages);

//     this.formState = this.forms.states;
//     this.formCountry = this.forms.countries;
//     this.formGender = this.forms.genders;
//     this.formLocation = this.forms.locations;
//     this.formDays = this.forms.days;
//     this.formProgram = this.forms.programs;
//     this.formSelective = this.forms.courses;
//     this.formStateResidence = this.forms.states;
//     this.form = this.fb.group({ selectiveCourses: this.fb.array([]) });

//   }
//   ngOnInit(): void {
//     this.form = this.fb.group({
//       fName: ['',],
//       lName: ['',],
//       otherName: [''],
//       dob: ['',],
//       gender: ['',],
//       phone: ['',],
//       email: ['',],
//       address: ['',],
//       stateOfResidence: ['',],
//       nationality: ['',],
//       stateOfOrigin: ['',],
//       programType: ['',],
//       preferredLocation: ['',],
//       preferredDays: ['',],
//       breadthCourse: ['',],
//       coreCourse: [true,],
//       electiveCourse: ['',],
//       selectiveCourses: this.fb.array([]),
//     });

//   }

//   users: [] = [];

//   _search(e: any) {

//   }



//   selectedCourses: string[] = [];

//   toggleSelection(value: string) {
//     const index = this.selectedCourses.indexOf(value);

//     if (index > -1) {
//       // Uncheck it
//       this.selectedCourses.splice(index, 1);
//     } else if (this.selectedCourses.length < 2) {
//       // Check it
//       this.selectedCourses.push(value);

//     }
//     this.form.get('selectiveCourses')?.setValue(this.selectedCourses);
//     console.log()

//   }


//   // ngOnInit(): void {
//   //   this.regForm = this.fb.group({
//   //     fName: ['', Validators.required],
//   //     lName: ['', Validators.required],
//   //     otherName: [''],
//   //     dob: ['', Validators.required],
//   //     gender: ['', Validators.required],
//   //     phone: ['', Validators.required],
//   //     email: ['', [Validators.required, Validators.email]],
//   //     address: ['', Validators.required],
//   //     stateOfResidence: ['', Validators.required],
//   //     nationality: ['', Validators.required],
//   //     stateOfOrigin: ['', Validators.required],
//   //     programType: ['', Validators.required],
//   //     preferredLocation: ['', Validators.required],
//   //     preferredDays: ['', Validators.required],
//   //     breadthCourse: ['', Validators.required],
//   //     coreCourse: [true, Validators.required],
//   //     electiveCourse: ['', Validators.required],
//   //     selectiveCourses: this.fb.array([]),
//   //     selectedCourses: this.fb.array([])
//   //   });






//   sendUser() {
//     if (this.form.invalid) {
//       console.error('All fields are required!');
//       return;
//     }
//     const user: User = this.form.value;
//     this.fireservice.addUser(user)
//       .then(() => console.log('User added successfully!'))
//       .catch(error => console.error('Error adding user:', error));
//     this.alert.alert('Successful!');
//     console.log(this.form.value);
//   }




// }

