import { Injectable } from '@angular/core';
import { Select2Data } from 'ng-select2-component';


@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor() { }

  statesList: string[] = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
    'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
    'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara',
    'Federal Capital Territory (FCT)'
  ];
  states: Select2Data = this.statesList.map(state => ({
    value: state.toLowerCase().replace(/\s+/g, '-'),
    label: state,
    data: { color: 'white', name: state }
  }));


  countriesList: string[] = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
    "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
    "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ];
  countries: Select2Data = this.countriesList.map(country => ({
    value: country.toLowerCase().replace(/\s+/g, '-'),
    label: country,
    data: { color: 'white', name: country }
  }));


  programList: string[] = [
    'Home Lesson', 'Online Lesson', 'Weekend class at Centers', 'Evening class at centers', 'Summer Program', 'Easter/Spring Program'
  ];
  programs: Select2Data = this.programList.map(program => ({
    value: program.toLowerCase().replace(/\s+/g, '-'),
    label: program,
    data: { color: 'white', name: program }
  }));


  dayList: string[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    'Sunday'
  ];
  days: Select2Data = this.dayList.map(day => ({
    value: day.toLowerCase().replace(/\s+/g, '-'),
    label: day,
    data: { color: 'white', name: day }
  }));



  locationList: string[] = [
    'Home', 'Virtual', 'Apo Centre', 'Gwarimpa Centre', 'Wuse Centre', 'Suncity Centre'
  ];
  locations: Select2Data = this.locationList.map(location => ({
    value: location.toLowerCase().replace(/\s+/g, '-'),
    label: location,
    data: { color: 'white', name: location }
  }));


  GenderOptions: string[] = [
    'Male', 'Female'
  ];
  genders: Select2Data = this.GenderOptions.map(gender => ({
    value: gender.toLowerCase().replace(/\s+/g, '-'),
    label: gender,
    data: { color: 'white', name: gender }
  }));


  selectiveCourses = [
    'Piano', 'Violin', 'Voice', 'Guitar', 'Trumpet', 'Drums', 'Saxophone'
  ];
  courses: Select2Data = this.selectiveCourses.map(course => ({
    value: course.toLowerCase().replace(/\s+/g, '-'),
    label: course,
    data: { color: 'white', name: course }
  }));

}
