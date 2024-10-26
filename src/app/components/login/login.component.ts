import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { AuthService } from '../../services/auth/auth.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageService } from 'primeng/api';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    ToastModule,
    ButtonModule,
    RippleModule,
  ],
  providers: [MessageService],
})




export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  ispasswordvalid!: boolean;
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private elementRef: ElementRef
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.customEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }




  customEmailValidator(control: AbstractControl) {
    const email = control.value;
    if (!email) return null;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    const isValid = emailPattern.test(email);
    return isValid ? null : { customEmail: true };
  }





  onSubmit(issubmit: boolean) {
    this.submit = issubmit;

    let form = this.loginForm;
    let password = form.get('password')?.value;
    this.ispasswordvalid = password === '12345678';

    if (form.valid) {
      const { email, password } = this.loginForm.value;
      if (this.AuthService.login(email, password)) {
        console.log('Login successful');
      }
    } else {
      console.log('Login failed');
    }
  }




  showInfo(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: `${message}`,
    });
  }






  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      console.log('ngOnInit login is worked');


      switch (params['from']) {
        case 'download':
          setTimeout(() => {
            this.showInfo(
              `You must login before accessing the ${params['from']} page.`
            );
          }, 500);
          break;

        case 'logout':
          setTimeout(() => {
            this.showInfo(`You must log in again to access our content.`);
          }, 500);
          break;

        case '**':
          setTimeout(() => {
            this.showInfo(
              `You must login before accessing the ${params['from']} page.`
            );
          }, 500);
          break;

        default:
          console.log('case NoParams is worked' + JSON.stringify(params)); // this when u access the login page with out any params
          break;
      }
    });
  }





}
