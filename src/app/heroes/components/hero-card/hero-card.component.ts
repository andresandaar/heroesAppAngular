import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit{
  /* @Output() methodName = new EventEmitter<Class>(); */
  @Input() hero!: Hero;

ngOnInit(): void {
 if (!this.hero) throw new Error("Hero property is requered");
}
}
