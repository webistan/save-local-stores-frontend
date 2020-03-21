import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { OverviewPageComponent } from './overview-page/overview-page.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'detail/:id', component: DetailViewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
