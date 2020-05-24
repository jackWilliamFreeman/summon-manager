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
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectMonsterDialogueComponent } from './select-monster/select-monster-dialogue/select-monster-dialogue.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MonsterHpDialogueComponent } from './monster-hp-dashboard/monster-hp-dialogue/monster-hp-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SelectMonsterComponent,
    MonsterViewComponent,
    MonsterSearchComponent,
    MonsterHpDashboardComponent,
    MonsterAttackDashboardComponent,
    AboutComponent,
    SelectMonsterDialogueComponent,
    MonsterHpDialogueComponent,
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
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
