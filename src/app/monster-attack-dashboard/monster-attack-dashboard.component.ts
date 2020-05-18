import { Component, OnInit, Input } from '@angular/core';
import { DashboardItem } from '../dashboarditem';

@Component({
  selector: 'app-monster-attack-dashboard',
  templateUrl: './monster-attack-dashboard.component.html',
  styleUrls: ['./monster-attack-dashboard.component.css'],
})
export class MonsterAttackDashboardComponent implements OnInit {
  @Input() dashboardMonsters: DashboardItem[];
  constructor() {}

  columnsToDisplay = ['id', 'name', 'has_Advantage', 'dice_Roll', 'critical'];

  ngOnInit(): void {}
}
