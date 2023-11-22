import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegExpUtils } from 'src/app/utilities/regexps';
import { NgxSpinnerService } from 'ngx-spinner';
import { roleType } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MyValidators } from 'src/app/utilities/validadores';

@Component({
  selector: 'auth-register-page',
  templateUrl: './register-page.component.html',
  /* styleUrls: ['./register-page.component.scss'] */
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        MyValidators.characterMinLength(2),
      ],
    ],
    surname: [
      '',
      [
        Validators.required,
        MyValidators.characterMinLength(4),
      ],
    ],
    role: [roleType.Client, [Validators.required]],
    email: [
      '',
      [Validators.required, MyValidators.email()],
    ],
    password: [
      '',
      [
        Validators.required,
        MyValidators.characterMinLength(10),
        MyValidators.capitalLetter(),
        MyValidators.lowerCase(),
        MyValidators.numbers()
      ],
    ],
  });

  visiblePass: boolean = true;
  error: string = '';

  public roles = [
    {
      type: 'Admin',
    },
    {
      type: 'Client',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  isValidField(field: string): boolean | null {
    return (
      (this.myForm.controls[field].invalid &&
        this.myForm.controls[field]?.dirty) ||
      this.myForm.controls[field]?.touched
    );
  }

  onSubmit() {
    this.error = '';
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      this.spinner.hide();
      return;
    }
    this.spinner.show();
    let newUser = this.myForm.getRawValue();
    this.authService.registrarUsuario(newUser).subscribe({
      next: () => {
        localStorage.setItem('email', this.email?.value);
        this.spinner.hide();
        this.myForm.reset();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
        this.error = err.message;
        this.spinner.hide();
      },
    });
  }

  getFieldError(field: string): string | null {
    const control = this.myForm.controls[field];
    if (!control) return null;
    const errors = control.errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'whiteSpace':
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

  get name() {
    return this.myForm.get('name');
  }
  get surname() {
    return this.myForm.get('surname');
  }

  get role() {
    return this.myForm.get('role');
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }
}
