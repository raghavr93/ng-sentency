import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../shared/password.validator';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm:FormGroup;
  
  constructor(private fb: FormBuilder,private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['',Validators.pattern('^[0-9]*$')],
      password: [''],
      confirmPassword: ['']
      },{validator : PasswordValidator});
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }
  
  onSubmit() {
    console.log(this.registrationForm.value);
    this._auth.registerUser(this.registrationForm.value)
      .subscribe(
        res =>{
          localStorage.setItem('token',res.token)
          this._router.navigate(['/special'])
          console.log(res)},
        error => console.error('Error!', error)
      );
  }

}
