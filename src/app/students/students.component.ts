import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  doLogout(){
    this.authService.doLogout();
  }

}
