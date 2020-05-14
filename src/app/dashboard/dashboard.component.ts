import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster';
import { DashboardItem } from '../dashboarditem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService
  ) {}

  monster: Monster;
  dashboardMonsters: DashboardItem[] = [];
  numberOfMonsters: number = 8;
  toHitModifier: number;

  getMonster(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.monsterService
      .getMonster(name)
      .subscribe((response) => (this.monster = response));
  }

  createMonsterTable() {
    for (let i = 0; i <= this.numberOfMonsters; i++) {
      const hpNumber = this.monster.Hit_Points.split(' ', 1);

      let newMonster = {
        Id: i,
        Name: this.monster.name,
        Hit_Points: +hpNumber[0],
        Damage_Taken: 0,
        Has_Advantage: false,
        Remaining_HP: +hpNumber[0],
        Dice_Roll: 1,
        Critical: false,
      } as DashboardItem;
      this.dashboardMonsters.push(newMonster);
    }
  }

  ngOnInit(): void {
    this.getMonster();
    this.createMonsterTable();
  }
}
