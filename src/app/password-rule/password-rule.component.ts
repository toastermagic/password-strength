import { Component, OnInit, Input } from '@angular/core';
import { PasswordRule } from '../lib/passwordStrengthChecker';

@Component({
  selector: 'app-password-rule',
  templateUrl: './password-rule.component.html',
  styleUrls: ['./password-rule.component.css']
})
export class PasswordRuleComponent implements OnInit {

  @Input()
  rule: PasswordRule;

  constructor() { }

  ngOnInit() {
  }

}
