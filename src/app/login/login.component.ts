import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required],
    email:['', [Validators.required,Validators.email]]
  })
  constructor(private fb:FormBuilder, private router:Router){

  }

  onSubmit(){
    console.log('submitted form',this.loginForm.value, this.loginForm.invalid);
    this.router.navigate(['/home']);
  }
  resetForm(){
    this.loginForm.reset();
  }

}
