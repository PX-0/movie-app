import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  @Input() title:string = "";
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>(); 
}
