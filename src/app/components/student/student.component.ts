import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/models/types/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() student:Student|undefined;
  @Output() editStudent:EventEmitter<void>=new EventEmitter<void>();
}
