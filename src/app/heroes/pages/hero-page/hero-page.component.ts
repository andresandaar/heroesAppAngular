import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
  /* styleUrls: ['./hero-page.component.scss'] */
})
export class HeroPageComponent implements OnInit {
  public heroe?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroeById(id)))
      .subscribe((heroe) => {
        if (!heroe) return this.router.navigateByUrl('/heroes/list');
        this.heroe = heroe;
        return;
      });
  }
  goBack(){
    this.router.navigateByUrl('heroes/list')
  }
}
