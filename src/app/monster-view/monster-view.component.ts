import { Component, OnInit, Input } from '@angular/core';
import { Monster } from '../monster';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monster-view',
  templateUrl: './monster-view.component.html',
  styleUrls: ['./monster-view.component.css'],
})
export class MonsterViewComponent implements OnInit {
  @Input() monster: Monster;

  constructor() {}

  ngOnInit(): void {}
}
