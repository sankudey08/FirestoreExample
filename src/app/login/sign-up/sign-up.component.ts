import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(public authService: AuthService,private fb: FormBuilder,private toastr: ToastrService) {
    this.createForm();
   }
  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }
  ngOnInit() {
  }
  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.toastr.success('Your account has been created','Registration');
    }, err => {
      console.log(err);
      this.toastr.error(err.message,"Registration");
    })
  }
}
