import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroresService: HeroesService, private router: Router) {
   // console.log('Constructor');
   }

  ngOnInit(): void {
    this.heroes = this._heroresService.getHeroes();

   // console.log(this.heroes);
  }

  // tslint:disable-next-line: typedef
  verHeroe(idx: number){
  this.router.navigate(['/heroe', idx]);
  }
}
