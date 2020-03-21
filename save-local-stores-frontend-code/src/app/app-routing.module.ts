import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { OverviewPageComponent } from './overview-page/overview-page.component'
import { ImpressumPageComponent } from './impressum-page/impressum-page.component'
import { FaqPageComponent} from './faq-page/faq-page.component'
import { DataPrivacyPageComponent} from './data-privacy-page/data-privacy-page.component'
import { AgbPageComponent} from './agb-page/agb-page.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'detail/:id', component: DetailViewPageComponent },
  { path: 'impressium', component: ImpressumPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'datenschutz', component: DataPrivacyPageComponent},
  { path: 'agb', component: AgbPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
