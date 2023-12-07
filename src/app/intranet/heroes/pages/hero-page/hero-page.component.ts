import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '@intranet_heroes/services/heroes.service';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
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
        console.log(heroe)
        if (!heroe) return this.router.navigateByUrl('dashboard/heroes/list');
        this.heroe = heroe;
        return;
      });
  }
  goBack(){
    this.router.navigateByUrl('heroes/list')
  }
}
