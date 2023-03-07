import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/interfaces/language-interface';


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {
  @Input() language!: Language;
}
