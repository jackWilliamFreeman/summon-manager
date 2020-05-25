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
  dataSource: MatTableDataSource<Monster>;
  columnsToDisplay = ['name', 'cr', 'summon'];

  constructor(
    private monsterService: MonsterService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(monsterService.getMonsters());
  }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(SelectMonsterDialogueComponent, {
      width: '350px',
      data: { number: 1, name: this.selectedMonster.name },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelect(monster: Monster) {
    this.selectedMonster = monster;
  }
}
