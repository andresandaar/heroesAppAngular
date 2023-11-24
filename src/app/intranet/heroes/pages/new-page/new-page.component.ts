import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter,switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'heroes-new-page',
  templateUrl: './new-page.component.html',
  /* styleUrls: ['./new-page.component.scss'] */
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  constructor(
    private heroesServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesServices.getHeroeById(id)))
      .subscribe((heroe) => {
        if (!heroe) return this.router.navigateByUrl('/');
        this.heroForm.reset(heroe);
        return;
      });
  }
  onSubmit() {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesServices.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`${hero.superhero}, update!`);
        this.router.navigateByUrl('/');
        //TODO: Mostrar snackbar
      });
    }
    this.heroesServices.addHero(this.currentHero).subscribe((hero) => {
      //TODO: Mostrar snackbar y navegar a /heroes/edit/hero.id
      this.router.navigate(['/heroes/edit', hero.id]);
      this.showSnackbar(`${hero.superhero}, created!`);
    });
  }

  OnDeleteHero() {
    if (!this.currentHero.id) throw new Error('Hero id is required');
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, {
      data: this.currentHero,
    });
     dialogRef.afterClosed().pipe(
       filter((result: boolean) => result),
       switchMap(() =>this.heroesServices.deleteHeroById(this.currentHero.id)),
       filter((result: boolean) => result)
     ).subscribe(()=>this.router.navigateByUrl('/'));


   /*  dialogRef.afterClosed().subscribe((result: boolean) => {
      if (!result) return;
      this.heroesServices
        .deleteHeroById(this.currentHero.id)
        .subscribe((result) => {
          if (result) this.router.navigateByUrl('/');
        });
    }); */

  }

  showSnackbar(message: string) {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }
}
