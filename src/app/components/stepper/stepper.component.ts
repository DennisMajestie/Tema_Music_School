import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  animations: [
    trigger('stepAnimation', [
      transition(':enter', [
        animate(
          '0.6s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'scale(0.8)', offset: 0 }),
            style({ opacity: 0.5, transform: 'scale(1.1)', offset: 0.5 }),
            style({ opacity: 1, transform: 'scale(1)', offset: 1 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '0.4s ease-in-out',
          style({ opacity: 0, transform: 'scale(0.8)' })
        ),
      ]),
    ]),
  ],
})
export class StepperComponent {
  steps = [
    {
      title: 'Beginner',
      description: 'Introduction to music theory and instrument basics.',
      details: [
        'Fundamental skills: hand positioning, finger placement, techniques',
        'Simple songs and exercises to build confidence'
      ]
    },
    {
      title: 'Intermediate',
      description: 'Expansion of technical skills and complex repertoire.',
      details: [
        'Scales, arpeggios, and chord progressions',
        'Classical and contemporary pieces',
        'Focus on musical expression, phrasing, and dynamics'
      ]
    },
    {
      title: 'Advanced',
      description: 'Refining techniques and exploring advanced compositions.',
      details: [
        'Tone production, articulation, and pedaling (for pianists)',
        'Performance skills: stage presence and audience engagement'
      ]
    },
    {
      title: 'Proficient',
      description: 'Mastery of instrument and musical style.',
      details: [
        'Development of personal expression and interpretation',
        'Preparation for professional performances, auditions, or competitions'
      ]
    }
  ];

  currentStep = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
