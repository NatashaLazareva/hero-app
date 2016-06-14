import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';


//noinspection TypeScriptValidateTypes
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:['app/hero.component.css']
})

export class HeroesComponent implements  OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail(){
    let link = ['HeroDetail', {id: this.selectedHero.id}];
    this.router.navigate(link);
  }
}

