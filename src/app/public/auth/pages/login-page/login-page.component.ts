import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyValidators } from "@core_utils/validadores";
import { AuthService } from '@auth_services/auth.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  /* styleUrls: ['./login-page.component.scss'] */
})
export class LoginPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, MyValidators.email()]],
    password: [
      '',
      [
        Validators.required,
        MyValidators.characterMinLength(10),
        MyValidators.password(),
      ],
    ],
  });

  visiblePass: boolean = true;
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  isValidField(field: string): boolean | null {
    return (
      (this.myForm.controls[field].invalid &&
        this.myForm.controls[field]?.dirty) ||
      this.myForm.controls[field]?.touched
    );
  }

  getFieldError(field: string): string | null {
    const control = this.myForm.controls[field];
    if (!control) return null;
    const errors = control.errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'tipoEmail':
          return 'Formato de correo invalido';
        case 'numbers':
          return 'Minimo un número';
        case 'lowerCase':
          return 'Minimo una minuscula';
        case 'capitalLetter':
          return 'Minimo una mayuscula';
        case 'minLength':
          return `Mínimo ${errors['minLength'].requiredLength} caracteres`;
      }
    }
    return null;
  }

  onLogin() {
    this.error = '';
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      this.spinner.hide();
      return;
    }
    this.spinner.show();
    let credentialUser = this.myForm.getRawValue();
    this.authServices.login(credentialUser).subscribe({
      next: (res) => {
            if (res) {
              localStorage.setItem('email', this.email?.value);
              this.myForm.reset();
              this.spinner.hide();
              this.router.navigate(['intranet/heroes']);
            }
      },
      error: (err) => {
        console.log(err);
        this.error = err.message;
        this.spinner.hide();
      },
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
