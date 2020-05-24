import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../dashboarditem';
import { MatDialog } from '@angular/material/dialog';
import { MonsterHpDialogueComponent } from './monster-hp-dialogue/monster-hp-dialogue.component';

@Component({
  selector: 'app-monster-hp-dashboard',
  templateUrl: './monster-hp-dashboard.component.html',
  styleUrls: ['./monster-hp-dashboard.component.css'],
})
export class MonsterHpDashboardComponent implements OnInit {
  @Input() dashboardMonsters: DashboardItem[];
  constructor(public dialog: MatDialog) {}

  tempHp: number = 0;
  columnsToDisplay = ['id', 'name', 'temp_HP', 'hit', 'remaining_HP', 'manage'];
  selectedMonster: DashboardItem;
  mightySummons: boolean = false;

  updateMonstersWithTempHp() {
    this.dashboardMonsters.forEach((monster) => {
      monster.temp_HP = this.tempHp;
    });
  }
  ngOnInit(): void {}

  onSelect(monster: DashboardItem) {
    this.selectedMonster = monster;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MonsterHpDialogueComponent, {
      width: '300px',
      data: {
        toHeal: 0,
        toDamage: 0,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.handleManagementDialogueResult(result);
    });
  }

  handleManagementDialogueResult(data: any) {
    if (
      +this.selectedMonster.remaining_HP + +data.toHeal <=
      this.selectedMonster.hit_Points
    ) {
      this.selectedMonster.remaining_HP += +data.toHeal;
    } else {
      this.selectedMonster.remaining_HP = this.selectedMonster.hit_Points;
    }

    //if you take damage but less than total temp hp
    if (this.selectedMonster.temp_HP >= +data.toDamage) {
      this.selectedMonster.temp_HP -= +data.toDamage;
    }
    //if the damage is above total temp hp, then remove it and carry over remaining damage.
    else {
      this.selectedMonster.remaining_HP =
        this.selectedMonster.remaining_HP -
        (+data.toDamage - this.selectedMonster.temp_HP);
      this.selectedMonster.temp_HP = 0;
    }
  }

  addMightySummonHp() {
    if (!this.mightySummons) {
      this.mightySummons = true;
      this.dashboardMonsters.forEach((monster) => {
        monster.remaining_HP += monster.hit_dice * 2;
        monster.hit_Points += monster.hit_dice * 2;
      });
    }
  }
}
