import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-sections',
  standalone: true,
  imports: [NgClass],
  templateUrl: './strength-sections.component.html',
  styleUrl: './strength-sections.component.scss'
})
export class StrengthSectionsComponent {
  @Input() passwordStrength: string = '';
}
