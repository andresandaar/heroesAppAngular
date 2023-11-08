import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  /* styleUrls: ['./login-page.component.scss'] */
})
export class LoginPageComponent {


  constructor(private authServices:AuthService, private router:Router){

  }

  onLogin(){
    this.authServices.login('davilaArroyo@gmail.com','1100').subscribe(()=>{
     this.router.navigate(['/']);
    })
  }
}
