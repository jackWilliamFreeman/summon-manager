import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../dashboarditem';
import { SelectionModel } from '@angular/cdk/collections';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-monster-attack-dashboard',
  templateUrl: './monster-attack-dashboard.component.html',
  styleUrls: ['./monster-attack-dashboard.component.css'],
})
export class MonsterAttackDashboardComponent implements OnInit {
  @Input() dashboardMonsters: DashboardItem[];
  constructor() {}

  columnsToDisplay = ['id', 'name', 'advantage', 'dice_Roll', 'critical'];
  toHit: number = 0;

  rollAttacksForMonsters() {
    this.dashboardMonsters.forEach((monster) => {
      monster.critical = false;
      var rolls: number[];
      var roll1 = Math.floor(Math.random() * 20) + 1;
      var roll2 = Math.floor(Math.random() * 20) + 1;
      rolls = [roll1, roll2];
      if (monster.has_Advantage) {
        var advRoll = Math.max.apply(null, rolls);
        monster.dice_Roll = +advRoll + +this.toHit;
        if (+monster.dice_Roll - +this.toHit === 20) {
          monster.critical = true;
        }
      } else {
        monster.dice_Roll = rolls[1];
        if (+monster.dice_Roll - +this.toHit === 20) {
          monster.critical = true;
        }
      }
    });
  }

  ngOnInit(): void {}
}
