export class PasswordRule {
    Rule: string;
    Test: Function;
    Pass: boolean;
}

export class PasswordStrengthChecker {
    public PasswordRules = [];

    constructor() {
        this.PasswordRules.push({
            Rule: 'Password must contain an upper-case character',
            Test: this.passwordContainsUpper
        });

        this.PasswordRules.push({
            Rule: 'Password must contain a lower-case character',
            Test: this.passwordContainsLower
        });

        this.PasswordRules.push({
            Rule: 'Password must contain a digit',
            Test: this.passwordContainsDigit
        });

        this.PasswordRules.push({
            Rule: 'Password must contain a symbol',
            Test: this.passwordContainsSymbol
        });

        this.PasswordRules.push({
            Rule: 'Password must be less than 128 characters',
            Test: this.passwordIsTooLong
        });

        this.PasswordRules.push({
            Rule: 'Password must be at least 10 characters',
            Test: this.passwordIsTooShort
        });
    }

    passwordContainsUpper(password: string): boolean {
        return /[A-Z]/.test(password);
    }

    passwordContainsLower(password: string): boolean {
        return /[a-z]/.test(password);
    }

    passwordContainsDigit(password: string): boolean {
        return /[0-9]/.test(password);
    }

    passwordContainsSymbol(password: string): boolean {
        return /\W/.test(password);
    }

    passwordIsTooLong(password: string): boolean {
        return password ? password.length < 128 : false;
    }

    passwordIsTooShort(password: string): boolean {
        return password ? password.length > 10 : false;
    }
}
