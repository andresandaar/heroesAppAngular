import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '@auth_services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() OnToogle: EventEmitter<boolean>  = new EventEmitter<boolean>();
  @Input()   isToogle: boolean = false;

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

  toogle() {
    this.isToogle = !this.isToogle;
   this.OnToogle.emit(this.isToogle);
  }
  navigate(url: string) {
    this.router.navigate([url]);
  }
}
