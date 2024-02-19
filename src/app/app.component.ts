import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { StrengthSectionsComponent } from './components/strength-sections/strength-sections.component';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, StrengthSectionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  passwordControl = new FormControl('');
  passwordStrength: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnInit(): void {
    this.passwordControl.valueChanges.subscribe(() => {
      this.checkPasswordStrength();
    });
  }

  checkPasswordStrength(): void {
    if (this.passwordControl.value !== null) {
      this.passwordStrength = this.passwordStrengthService.checkPasswordStrength(this.passwordControl.value);
    }
  }
}
