import { Injectable } from '@angular/core';
import * as _monsters from '../assets/srd_5e_monsters.json';
import { Monster } from './monster';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  constructor() {}

  getMonsters(): Monster[] {
    return this.parseMonsterFile();
  }

  parseMonsterFile(): Monster[] {
    var monsters = (_monsters as any).default as Monster[];
    monsters.forEach((monster) => {
      monster.CRString = monster.Challenge.split('(', 1)[0];
      monster.CRNumber = (function (crString) {
        switch (crString) {
          case '1/2':
            return (monster.CRNumber = 0.5);
          case '1/4':
            return (monster.CRNumber = 0.25);
          case '1/8':
            return (monster.CRNumber = 0.125);
          default:
            return +monster.CRString;
        }
      })(monster.CRString.trim());
    });

    return monsters;
  }

  getMonster(name: string): Observable<Monster> {
    var monsters = this.parseMonsterFile();
    var monster = monsters.find((m) => m.name == name);
    return of(monster);
  }
}
