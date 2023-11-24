import {
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const chaLength = /.{10}/;
const capitalletterRegex = /[A-Z]{1}/;
const lowercaseRegex = /[a-z]{1}/;
const numberRegex = /[0-9]{1}/;
const whiteSpaceRegex = /^\s*$/;
const twoCadSpace = /^[A-Za-zÀ-ÿ\u00f1\u00d1]+\s*[A-Za-zÀ-ÿ\u00f1\u00d1]*$/;

export class MyValidators {
  /*   static email(control: AbstractControl) {
    if (!email.test(control?.value)) {
      return { email: true };
    }
    return null;
  } */
  static email(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control?.value;
      const regex = emailRegex;
      if (Validators.required(control) !== null || !regex.test(value)) {
        return {
          tipoEmail: {
            requiredLength: regex,
            actualLength: value,
          },
        };
      }
      return null;
    };
  }

  static characterMinLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let value: string = control?.value?.trim();
      if (!value) {
        value = '';
      }
      if (Validators.required(control) !== null || value?.length < minLength) {
        return {
          minLength: {
            requiredLength: minLength,
            actualLength: value.length,
          },
        };
      }
      return null;
    };
  }

  static capitalLetter(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control?.value;
      const regex = capitalletterRegex;
      if (Validators.required(control) !== null || !regex.test(value)) {
        return {
          capitalLetter: {
            requiredLength: regex,
            //actualLength: value,
          },
        };
      }
      return null;
    };
  }

  static lowerCase(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control?.value;
      const regex = lowercaseRegex;
      if (Validators.required(control) !== null || !regex.test(value)) {
        return {
          lowerCase: {
            requiredLength: regex,
            //actualLength: value,
          },
        };
      }
      return null;
    };
  }

  static numbers(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control?.value;
      const regex = numberRegex;
      if (Validators.required(control) !== null || !regex.test(value)) {
        return {
          numbers: {
            requiredLength: regex,
            //actualLength: value,
          },
        };
      }
      return null;
    };
  }

  static whiteSpace(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control?.value;
      const regex = whiteSpaceRegex;
      if (Validators.required(control) !== null || regex.test(value)) {
        return {
          whiteSpace: {
            requiredLength: regex,
          },
        };
      }
      return null;
    };
  }

  static password(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control?.value;
     if (
       !numberRegex.test(value) ||
       !lowercaseRegex.test(value) ||
       !capitalletterRegex.test(value)
     ) {
       return {
         ...(numberRegex.test(value) ? null : { numbers: { required: true } }),
         ...(lowercaseRegex.test(value)
           ? null
           : { lowerCase: { required: true } }),
         ...(capitalletterRegex.test(value)
           ? null
           : { capitalLetter: { required: true } }),
       };
     }

    return null;
  };
  }
}
