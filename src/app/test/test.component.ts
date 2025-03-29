import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';
// import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-test',
  standalone: true,
  template: `<h1>Check the console for Firestore data</h1>`,
})
export class TestComponent {
  // constructor(private firestore: Firestore) { }

  constructor(private data: FirestoreService) {

  }



}