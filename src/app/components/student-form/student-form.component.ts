import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hobby } from 'src/app/models/interfaces/hobby-interface';
import { Language } from 'src/app/models/interfaces/language-interface';
import { Student } from 'src/app/models/types/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  
  @Input() student?:Student;
  @Output() addStudent:EventEmitter<Student> = new EventEmitter<Student>();
  @Output() editStudent:EventEmitter<Student> = new EventEmitter<Student>();
  
  ngOnInit(): void {
    if(!this.student){
      this.student = this.createStudent();
      this.addHobby();
      this.addLang(); 
      this.mode = 'add';
    };
  }

  genders = ['M','F'];


  mode : 'edit'|'add' = 'add';


  addHobby(){
    this.student!.hobbies.push({name:'',icon:''});
  }

  addLang(){
    this.student!.lingue.push({name:'',icon:''});
  }

  saveChanges(){
    if(this.mode === "add"){
      this.addStudent.emit(this.student);
    }else {
      this.editStudent.emit(this.student);
    }
  }


  private createStudent():Student{
    return {
      nome:"",
      cognome:"",
      eta : 19,
      citta : "",
      genere : "",
      hasPets : false,
      hobbies : new Array<Hobby>,
      lingue : new Array<Language>,
    };
  }

}
