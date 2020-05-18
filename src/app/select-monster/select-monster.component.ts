import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  selectedMonster: Monster;
  monsters: Monster[];
  monsters$: Observable<Monster[]>;
  numberToSummon: number = 1;
  columnsToDisplay = ['name'];
  private searchTerms = new Subject<string>();
  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.monsters$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        return this.monsterService.searchMonsters(term);
      })
    );

    setTimeout(() => this.search(''), 0);
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // Push a search term into the observable stream.
  searchMonster(event: Event): void {
    var searchTerm = (event.target as HTMLInputElement).value;
    this.searchTerms.next(searchTerm);
  }

  getMonsters() {
    this.monsterService.getMonsters();
  }

  onSelect(monster: Monster) {
    this.selectedMonster = monster;
  }
}
