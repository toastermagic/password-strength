import { Component, OnInit } from '@angular/core';
import { PasswordStrengthChecker, PasswordRule } from '../lib/passwordStrengthChecker';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  message = '';
  password: string;

  constructor(private checker: PasswordStrengthChecker) { }

  ngOnInit() {
    this.checkRules('');
  }

  checkRules(event) {
    this.checker.PasswordRules.forEach((r: PasswordRule) => {
      r.Pass = r.Test(event);
    });

    this.message = this.checker.PasswordRules.every((r: PasswordRule) => {
      return r.Pass;
    }) ? 'Good' : 'Not Good';
  }
}
