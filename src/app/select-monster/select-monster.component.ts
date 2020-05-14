import { Component, OnInit } from '@angular/core';
import { Monster } from '../monster';
import * as _monsters from '../srd_5e_monsters.json';
import { MonsterService } from '../monster.service';

@Component({
  selector: 'app-select-monster',
  templateUrl: './select-monster.component.html',
  styleUrls: ['./select-monster.component.css'],
})
export class SelectMonsterComponent implements OnInit {
  monsters: Monster[];
  selectedMonster: Monster;

  constructor(private monsterService: MonsterService) {}

  ngOnInit(): void {
    this.getMonsters();
  }

  getMonsters() {
    this.monsterService
      .getMonsters()
      .subscribe((response) => (this.monsters = response));
  }

  onSelect(monster: Monster) {
    this.selectedMonster = monster;
  }
}
