import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkPasswordStrength(password: string): string {
    if (!password) {
      return 'empty';
    } else if (password.length < 8) {
      return 'weak';
    } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^\W+$/.test(password)) {
      return 'easy';
    } else if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).+$/.test(password)) {
      return 'strong';
    } else {
      return 'medium';
    }
  }
}
