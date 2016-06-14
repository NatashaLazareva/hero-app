import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';
import {HeroDetailComponent} from './hero-detail.component';


//noinspection TypeScriptValidateTypes
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:['app/hero.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements  OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;

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

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) {this.getHeroes();}
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero).then(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {this.selectedHero = null;}
    }).catch(error => this.error = error);
  }

}

