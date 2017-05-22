import { PasswordStrengthPage } from './app.po';

describe('password-strength App', () => {
  let page: PasswordStrengthPage;

  beforeEach(() => {
    page = new PasswordStrengthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
