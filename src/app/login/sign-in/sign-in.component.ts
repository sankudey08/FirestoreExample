import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  
  constructor(public authService: AuthService,private fb: FormBuilder,private toastrService:ToastrService,private router: Router) {
      this.createForm();
     }
     createForm() {
      this.loginForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['',Validators.required]
      });
    }

  ngOnInit() {
  }
  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/student']);
    }, err => {
      console.log(err);
      this.toastrService.error(err.message,"Login");
    })
  }

}
