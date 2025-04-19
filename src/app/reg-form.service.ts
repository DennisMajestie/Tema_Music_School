import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RegFormService {

  constructor() { }

  alert(text: any) {
    Swal.fire({
      text: text,
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }

}
