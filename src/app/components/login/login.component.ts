import { Component, inject } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  isLoginView : boolean = true;

  onUserAuth() {
    this.isLoginView = !this.isLoginView
  }

  useRegisterObj: any = {
    useremail:'',
    password:''
  }

  userLogin: any = {
    useremail:'',
    password: ''
  }

  router = inject(Router);

  onLogin() {
    const isLocalData = localStorage.getItem("angular19Local");
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m:any) => m.useremail == this.userLogin.useremail && m.password == this.userLogin.password);
      if(isUserFound != undefined) {
        this.router.navigateByUrl('dashboard')
      } else {
        alert("User name not defined.")
      }
    }
  }

  onRegister() {
    const isLocalData = localStorage.getItem("angular19Local");
    if(isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.useRegisterObj);
      localStorage.setItem("angular19Local",JSON.stringify(localArray))
      
    } else {
      const localArray = [];
      localArray.push(this.useRegisterObj);
      localStorage.setItem("angular19Local",JSON.stringify(localArray))
    }
    alert("Registration Successfull")
  }
}

