import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'password-test';

  ngOnInit(): void {
    this.password = '';

    this.checkPasswordStrength();
  }

  password: string = '';
  passwordStrength: string = '';

  checkPasswordStrength(): void {
    if (!this.password) {
      this.passwordStrength = 'empty';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (/^[a-zA-Z]+$/.test(this.password) || /^[0-9]+$/.test(this.password) || /^\W+$/.test(this.password)) {
      this.passwordStrength = 'easy';
    } else if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else {
      this.passwordStrength = 'medium';
    }
  }
}
