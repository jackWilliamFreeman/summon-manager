import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';
import { MonsterService } from '../monster.service';
import { Subject, Observable, zip } from 'rxjs';
import { distinctUntilChanged, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-select-monster',
  templateUrl: './select-monster.component.html',
  styleUrls: ['./select-monster.component.css'],
})
export class SelectMonsterComponent implements OnInit {
  monsters: Observable<Monster[]>;
  selectedMonster: Monster;
  monsters$: Observable<Monster[]>;
  numberToSummon: number = 1;
  private searchTerms = new Subject<string>();
  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monsters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.monsterService.searchMonsters(term))
    );
    this.search('');
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  getMonsters() {
    this.monsterService.getMonsters();
  }

  onSelect(monster: Monster) {
    this.selectedMonster = monster;
  }
}
