import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/public/auth/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isLogged: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isLogged$.subscribe((value) => {
        this.isLogged = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
