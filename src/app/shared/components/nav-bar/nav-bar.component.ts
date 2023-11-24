import { Component,OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    NavBarComponent,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit, OnDestroy {
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
