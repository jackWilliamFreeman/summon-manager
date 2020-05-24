import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectMonsterComponent } from './select-monster/select-monster.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'dashboard/:name/:numberToSummon/:tempHp',
    component: DashboardComponent,
  },
  { path: '', component: SelectMonsterComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
