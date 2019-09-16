import { StudentService } from './../../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private stdService: StudentService,
    private fireStore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();
    this.stdService.formData={
      id: null,
      fullName: '',
      standard:'',
      email:'',
      mobile:'',
      studentCode:''
    }  
  }

  onSubmit(form: NgForm){
    let data=Object.assign({},form.value);
    delete data.id;
    if(form.value.id==null){
      this.fireStore.collection('Students').add(data);
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Student Registration');
    }
    else{
      this.fireStore.doc('Students/'+form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Updated Successfully','Student Registration');
    }
  }

  onReset(form:NgForm){
    this.resetForm(form);
  }
}
