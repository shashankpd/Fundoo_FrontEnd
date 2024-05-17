import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,private userService:UserService ,private router:Router) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            
        });
    }

    // convenience getter for easy access to form fields
    get loginControl() { return this.loginForm.controls; }

    handleLogin() {
      const { email, password } = this.loginForm.value;
      this.userService
        .loginApi(email, password) // Pass email and password separately
        .subscribe(
          (res:any) => {
            localStorage.setItem("AuthToken",res.data)
            this.router.navigate(["/dashboard/notes"])
          },
          (err) => console.log(err)
        );
    }
}
