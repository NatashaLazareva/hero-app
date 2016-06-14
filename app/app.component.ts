/**
 * Created by Natalia on 13.06.2016.
 */
import {Component} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from  './hero-detail.component'

@Component({
    selector: 'my-app',
    template:
      `
        <h1>{{title}}</h1>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <router-outlet></router-outlet>
      `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService]

})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  }
])

export class AppComponent {
  title =  "MY APP";
}
