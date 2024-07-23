export class IsValid {
    static requiredLengthString(str, minLength, maxLength) {
        if (typeof str !== 'string') {
            return false;
        }
        if (str.length < minLength) {
            return false;
        }
        if (str.length > maxLength) {
            return false;
        }
        return true;
    }
    static containsAllowedSymbols(str, abc) {
        for (const symbol of str) {
            if (!abc.includes(symbol)) {
                return false;
            }
            return true;
        }
    }
    static containsNotAllowedSymbols(str, abc) {
        for (const symbol of str) {
            if (!abc.includes(symbol)) {
                return false;
            }
            return true;
        }
    }
    static username(str) {
        const minLength = 4;
        const maxLength = 20;
        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (!IsValid.containsAllowedSymbols(str, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890')) {
            return false;
        }
        return true;
    }
    static email(str) {
        const minLength = 6;
        const maxLength = 20;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (!IsValid.containsAllowedSymbols(str, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@.-+_')) {
            return false;
        }
        return true;
    }
    static phone(str) {
        const minLength = 3;
        const maxLength = 20;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (!IsValid.containsAllowedSymbols(str, '1234567890+')) {
            return false;
        }
        return true;
    }
    static name(str) {
        const minLength = 2;
        const maxLength = 20;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        if (IsValid.containsNotAllowedSymbols(str, '`~!@#$%^&*()_+=-,<.>/?\\;\':"[{}]|')) {
            return false;
        }
        return true;
    }
    static surname(str) {
        const minLength = 2;
        const maxLength = 20;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        return true;
    }
    static password(str) {
        const minLength = 12;
        const maxLength = 100;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        return true;
    }
    static IBAN(str) {
        const minLength = 20;
        const maxLength = 24;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        return true;
    }
    static url(str) {
        const minLength = 2;
        const maxLength = 3000;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        return true;
    }
    static urlSlug(str) {
        const minLength = 1;
        const maxLength = 150;

        if (!IsValid.requiredLengthString(str, minLength, maxLength)) {
            return false;
        }
        return true;
    }

}
