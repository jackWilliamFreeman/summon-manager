import { Component, OnInit, Inject } from '@angular/core';
import { MonsterHpDashboardComponent } from '../monster-hp-dashboard.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monster-hp-dialogue',
  templateUrl: './monster-hp-dialogue.component.html',
  styleUrls: ['./monster-hp-dialogue.component.css'],
})
export class MonsterHpDialogueComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MonsterHpDashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
