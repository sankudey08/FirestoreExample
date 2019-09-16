import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from './../../shared/student.model';
import { StudentService } from './../../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Student[];
  constructor(private stdService: StudentService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.stdService.getStudents().subscribe(actionArray=>{
      this.studentList = actionArray.map(item=>{
        return{ id: item.payload.doc.id, 
        ...item.payload.doc.data()} as Student
      })
    });
  }

  onEdit(std:Student){
    this.stdService.formData=Object.assign({},std);
  }

  onDelete(id:String){
    if(confirm("Are you sure?"))
    {
      this.firestore.doc('Students/'+id).delete();
      this.toastr.warning('Record Deleted','Student Record');
    }
  }

}
