import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgbPageComponent } from './agb-page/agb-page.component';
import { DataPrivacyPageComponent } from './data-privacy-page/data-privacy-page.component'
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component'
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { OverviewPageComponent } from './overview-page/overview-page.component'
import { VoucherOrderPageComponent } from './voucher-order-page/voucher-order-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'data-privacy', component: DataPrivacyPageComponent },
  { path: 'detail/:id', component: DetailViewPageComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: 'impressum', component: ImpressumPageComponent },
  { path: 'overview/:id', component: OverviewPageComponent },
  { path: 'terms', component: AgbPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: 'order', component: VoucherOrderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
