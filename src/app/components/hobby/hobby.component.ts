import { Component, Input } from '@angular/core';
import { Hobby } from 'src/app/models/interfaces/hobby-interface';


@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss']
})
export class HobbyComponent {
  @Input() hobby!: Hobby;
}
