import { Component, OnInit } from '@angular/core';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ToastModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [MessageService],
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  submit: boolean | undefined;
  email:any;
  sameemail:boolean = false;


  constructor(private fb: FormBuilder, private AuthService: AuthService) {
    this.signUpForm = this.fb.group({
      name: ['', []],
      email: ['', [Validators.required, this.customEmailValidator,this.SameEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  SameEmailValidator(control: AbstractControl) {
    const email = control.value;
    const isValid = email === "admin@gmail.com" || email === "test@gmail.com";
    return isValid ? { SameEmail: true } : null ;
    }



  customEmailValidator(control: AbstractControl) {
    const email = control.value;
    if (!email) return null;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    const isValid = emailPattern.test(email);
    return isValid ? null : { customEmail: true };
  }

  onSubmit(issubmit:any) {
    console.log(issubmit);
    this.submit = issubmit;
    this.sameemail = this.signUpForm.get('email')?.value;

    if (this.signUpForm.valid){
      if (this.AuthService.signup(this.signUpForm)) {
      console.log('signup successful');
    }else {
      console.log('signup failer');
    }
    }else{
      console.log('signup is down .');
    }

  }

  ngOnInit(): void {}
}
