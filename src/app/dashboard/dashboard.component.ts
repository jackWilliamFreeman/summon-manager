import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster';
import { DashboardItem } from '../dashboarditem';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private monsterService: MonsterService,
    private location: Location
  ) {}

  monster: Monster;
  dashboardMonsters: DashboardItem[] = [];
  numberOfMonsters: number = 1;
  toHitModifier: number;
  tempHp: number = 0;

  getMonster(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.numberOfMonsters = +this.route.snapshot.paramMap.get('numberToSummon');
    this.monsterService
      .getMonster(name)
      .subscribe((response) => (this.monster = response));
  }

  createMonsterTable() {
    for (let i = 1; i <= this.numberOfMonsters; i++) {
      const hpNumber = this.monster.Hit_Points.split(' ', 1);

      let newMonster = {
        id: i,
        name: this.monster.name,
        hit_Points: +hpNumber[0],
        damage_Taken: 0,
        has_Advantage: false,
        remaining_HP: +hpNumber[0],
        dice_Roll: null,
        critical: false,
        temp_HP: this.tempHp,
      } as DashboardItem;
      this.dashboardMonsters.push(newMonster);
    }
  }

  ngOnInit(): void {
    this.getMonster();
    this.createMonsterTable();
  }
}
