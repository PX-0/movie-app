import { Component } from '@angular/core';
import { STUDENTS } from './data/students';
import { Student } from './models/types/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  students =structuredClone(STUDENTS);

  selectedStudent: Student | undefined;

  handleBlockOne(text: string): void {
    alert(text);
  }

  addStudent(student:Student):void {
    this.students.unshift(student);
  }

  editStudent(student:Student):void{
    this.selectedStudent = student;
  }

  handleEditStudent(student:Student):void{
    const indexStudent:number = this.students.findIndex((stud:Student):boolean => stud.nome === student.nome && stud.cognome === student.cognome);
    if(indexStudent>=0){
      this.students.splice(indexStudent,1,student);
    }
  }
}
