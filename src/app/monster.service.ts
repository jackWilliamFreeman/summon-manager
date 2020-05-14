import { Injectable } from '@angular/core';
import * as _monsters from './srd_5e_monsters.json';
import { Monster } from './monster';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  constructor() {}

  getMonsters(): Observable<Monster[]> {
    return of((_monsters as any).default as Monster[]);
  }

  searchMonsters(term: string): Observable<Monster[]> {
    var monsters = (_monsters as any).default as Monster[];
    var filteredMonsters = monsters.filter((m) =>
      m.name.toLowerCase().includes(term.toLowerCase())
    );
    return of(filteredMonsters);
  }

  getMonster(name: string): Observable<Monster> {
    var monsters = (_monsters as any).default as Monster[];
    var monster = monsters.find((m) => m.name == name);
    return of(monster);
  }
}
