import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Monster } from '../monster';
import { MonsterService } from '../monster.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectMonsterDialogueComponent } from './select-monster-dialogue/select-monster-dialogue.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-select-monster',
  templateUrl: './select-monster.component.html',
  styleUrls: ['./select-monster.component.css'],
})
export class SelectMonsterComponent implements OnInit {
  selectedMonster: Monster;
  columnsToDisplay = ['name', 'cr', 'summon'];
  monsters: Monster[];
  filteredMonsters: Monster[];

  constructor(
    private monsterService: MonsterService,
    public dialog: MatDialog
  ) {}
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.monsters = this.monsterService.getMonsters();
    this.filteredMonsters = this.monsters;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SelectMonsterDialogueComponent, {
      width: '350px',
      data: { number: 1, name: this.selectedMonster.name },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filteredMonsters = this.monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        monster.meta.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  onSelect(monster: Monster) {
    this.selectedMonster = monster;
  }

  sortData(sort: Sort) {
    const data = this.filteredMonsters.slice();
    if (!sort.active || sort.direction === '') {
      this.filteredMonsters = data;
      return;
    }

    this.filteredMonsters = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'cr':
          return compare(a.CRNumber, b.CRNumber, isAsc);
        default:
          return 0;
      }
    });

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    function compareCr(a: string, b: string, isAsc: boolean) {
      return;
    }
  }
}
