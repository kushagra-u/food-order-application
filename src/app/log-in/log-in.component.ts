import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  emailIds: string[] = [];
  passArray: string[] = [];
  notFoundEmail: any;
  constructor(private route: Router) {
    const storedEmailIds = localStorage.getItem('EmailId');
    const storedPassArray = localStorage.getItem('Password');
    if (storedEmailIds) {
      this.emailIds = JSON.parse(storedEmailIds);
    }
    if (storedPassArray) {
      this.passArray = JSON.parse(storedPassArray);
    }
  }

  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login(userid: string, password: string) {
    userid = userid.trim().toLowerCase();
    if (this.emailIds.includes(userid)) {
      const getIndex = this.emailIds.findIndex(email => email.trim().toLowerCase() === userid);
      if (password === this.passArray[getIndex]) {
        localStorage.setItem('logedIn', 'true');
        alert('Logged-In Successfully');
      } else {
        localStorage.setItem('logedIn', 'false');
        this.notFoundEmail = document.getElementById('passwordNotFound');
        this.notFoundEmail.style.display = 'block'
      }
    } else {
      this.notFoundEmail = document.getElementById('emailNotFound');
      this.notFoundEmail.style.display = 'block'
    }
  }

  register() {
    this.route.navigate(["register"]);
  }
}


