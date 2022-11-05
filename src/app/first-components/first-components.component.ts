import { Component, OnInit ,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css']
}) 
export class FirstComponentsComponent implements OnInit {
  today: number = Date.now();
  data:number=1;
  str:string='Hello Angular';
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  arrayData= ['abc',1,true,4.5];
  HEROES: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  
  selectedHero?: Hero;
  h?:Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
  onChange(): void {
//  this.selectedHero = hero;
this.h = this.selectedHero;
}

  constructor() { }

  ngOnInit(): void {
  }

}
