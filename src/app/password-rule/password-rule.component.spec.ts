import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRuleComponent } from './password-rule.component';

describe('PasswordRuleComponent', () => {
  let component: PasswordRuleComponent;
  let fixture: ComponentFixture<PasswordRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
