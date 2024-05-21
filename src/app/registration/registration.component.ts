import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signupForm:FormGroup;
  name!: string;
  firstname!: string;
  lastname!: string;
  phoneNumber!: number;
  city!: string;
  emailId!: string|[];
  password: any;
  required!: string;
  emailIds:any;
  passArray:any;
  constructor(private route:Router, private formbuilder: FormBuilder){
    localStorage.setItem('EmailId', JSON.stringify(['abc@gmail.com']));
    localStorage.setItem('Password', JSON.stringify(['abc123@']));
    this.emailIds = JSON.parse(localStorage.getItem('EmailId') || '[]');
    this.passArray = JSON.parse(localStorage.getItem('Password') || '[]');

    this.signupForm = formbuilder.group({
     fname: ['', Validators.required],
     lname: ['', Validators.required],
     moNumber: ['', Validators.required],
     city: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     pass: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(6)]],
    })
  }
   
  
  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  postData(signupForm: any) {
   this.firstname = signupForm.controls.fname.value;
   this.lastname = signupForm.controls.lname.value;
   this.phoneNumber = signupForm.controls.moNumber.value;
   this.city = signupForm.controls.city.value;
   this.emailId = signupForm.controls.email.value;
   this.password = signupForm.controls.pass.value;

   this.emailIds.push(this.emailId);
   this.passArray.push(this.password);
   localStorage.setItem('EmailId', JSON.stringify(this.emailIds));
   localStorage.setItem('Password', JSON.stringify(this.passArray));
  };

  hasError(controlName: string, errorName: string) {
    return this.signupForm.controls[controlName].hasError(errorName);
  };

  login(){
    this.route.navigate(['login'])
  }
}
// import { Component } from '@angular/core';
// import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// const emailValue = ['abc@gmail.com'];


// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {
//   signupForm: FormGroup;
//   name: string;
//   firstname: string;
//   lastname: string;
//   phoneNumber: number;
//   city: string;
//   emailId: string;
//   password: any;
//   required: string;

  
//   constructor(private router: Router, private formbuilder: FormBuilder) {
//     console.log('registration component loaded');
     
//     this.signupForm = formbuilder.group({
//       fname: ['', Validators.required],
//       lname: ['', Validators.required],
//       moNumber: ['', Validators.required],
//       city: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       pass: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(6)]],
//     })

//   }
  
//   ngOnInit() {
//     const arr = new FormArray([
//       new FormControl('abc'),
//       new FormControl('bcd')
//     ])
//   }
//   existingArray = JSON.parse(localStorage.getItem('EmailId')) || [];

//   postData(signupForm: any) {
//     this.firstname = signupForm.controls.fname.value;
//     this.lastname = signupForm.controls.lname.value;
//     this.phoneNumber = signupForm.controls.moNumber.value;
//     this.city = signupForm.controls.city.value;
//     this.emailId = signupForm.controls.email.value;
//     this.password = signupForm.controls.pass.value;

//     this.existingArray.push(this.emailId)
//     localStorage.setItem('EmailId', JSON.stringify(this.existingArray));
//     localStorage.setItem('Password', this.password);

//     let onepage = document.getElementById('registeredDetails');
//     let secondpage = document.getElementById('RegistrationForm');
//     onepage.style.display = 'block';
//     secondpage.style.display = 'none';
//   }
//   hasError(controlName: string, errorName: string) {
//     return this.signupForm.controls[controlName].hasError(errorName);
//   }
//   goToLogin() {
//     this.router.navigate(['/login']);
//   }
//   reset() {
//     this.signupForm.reset({
//       fname: 'Rohit',
//       lname: 'gupta',
//       moNumber: 8567012094,
//       city: 'ranchi',
//       email: 'rohit123@gmail.com',
//       pass: '1472586'
//     });
//   }
//   clear() {
//     this.signupForm.reset();
//   }

// }