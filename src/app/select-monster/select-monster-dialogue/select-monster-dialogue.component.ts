import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-monster-dialogue',
  templateUrl: './select-monster-dialogue.component.html',
  styleUrls: ['./select-monster-dialogue.component.css'],
})
export class SelectMonsterDialogueComponent {
  constructor(
    public dialogRef: MatDialogRef<SelectMonsterDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
