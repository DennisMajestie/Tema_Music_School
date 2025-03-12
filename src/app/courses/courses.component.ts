// courses.component.ts
import { Component } from '@angular/core';
import { StepperComponent } from '../components/stepper/stepper.component';

@Component({
  standalone: true,
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  imports: [StepperComponent]
})
export class CoursesComponent {


}

