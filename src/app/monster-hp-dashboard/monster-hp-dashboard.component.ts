import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../dashboarditem';

@Component({
  selector: 'app-monster-hp-dashboard',
  templateUrl: './monster-hp-dashboard.component.html',
  styleUrls: ['./monster-hp-dashboard.component.css'],
})
export class MonsterHpDashboardComponent implements OnInit {
  @Input() dashboardMonsters: DashboardItem[];
  constructor() {}

  columnsToDisplay = ['id', 'name', 'damage_Taken', 'temp_HP', 'remaining_HP'];

  ngOnInit(): void {}
}
