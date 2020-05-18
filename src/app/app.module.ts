import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectMonsterComponent } from './select-monster/select-monster.component';
import { HttpClientModule } from '@angular/common/http';
import { MonsterViewComponent } from './monster-view/monster-view.component';
import { MonsterSearchComponent } from './monster-search/monster-search.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonsterHpDashboardComponent } from './monster-hp-dashboard/monster-hp-dashboard.component';
import { MonsterAttackDashboardComponent } from './monster-attack-dashboard/monster-attack-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectMonsterComponent,
    MonsterViewComponent,
    MonsterSearchComponent,
    MonsterHpDashboardComponent,
    MonsterAttackDashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
