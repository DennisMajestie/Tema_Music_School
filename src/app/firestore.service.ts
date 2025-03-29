import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';




export interface User {
  fName: string;
  lName: string;
  otherName?: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  stateOfResidence: string;
  nationality: string;
  stateOfOrigin: string;
  programType: string;
  preferredLocation: string;
  preferredDays: string;
  breadthCourse: string;
  coreCourse: boolean;
  electiveCourse: string;
  selectiveCourses: boolean[]; // Assuming checkboxes return an array of booleans
}


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  firebaseApplication;
  firestore: firebase.firestore.Firestore;
  messages: any[] = [];
  private collectionName = 'users';



  constructor() {
    this.firebaseApplication = firebase.initializeApp({
      apiKey: "AIzaSyC7fMudpjMiFa0eI65JuKMkR8YFf8awEXQ",
      authDomain: "backendtema.firebaseapp.com",
      projectId: "backendtema",
      storageBucket: "backendtema.firebasestorage.app",
      messagingSenderId: "301002784423",
      appId: "1:301002784423:web:de613d46593b8813342582"
    });
    this.firestore = firebase.firestore();
  }

  addUser(user: User): Promise<void> {
    return this.firestore.collection(this.collectionName).add(user)
      .then(() => console.log('User added successfully!'))
      .catch(error => console.error('Error adding user:', error));

  }

  deleteUser(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete()
      .then(() => console.log('User deleted successfully!'))
      .catch(error => console.error('Error deleting user:', error));
  }

  getUsers(): void {
    this.firestore.collection(this.collectionName).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.messages.push(doc.data());
        });
      })
      .catch(error => console.error('Error getting users:', error));
  }

  updateUser(id: string, user: User): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(user)
      .then(() => console.log('User updated successfully!'))
      .catch(error => console.error('Error updating user:', error));
  }




}
