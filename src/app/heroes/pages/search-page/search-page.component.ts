import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'heroes-search-page',
  templateUrl: './search-page.component.html',
  /*   styleUrls: ['./search-page.component.scss'] */
})
export class SearchPageComponent implements OnInit {
  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?:Hero
  /*  public filteredHeroes!: Observable<Hero[]>; */
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    /*     this.filteredHeroes = this.searchInput.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value || ''))
    ); */
  }

  /*   private _filter(value: string): Observable<Hero[]> {
    return this.heroesService.getSuggestions(value);
  }
 */
  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroesService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero=undefined
      return
    }
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }
}
