import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component';
import { VoucherOrderPageComponent } from './voucher-order-page/voucher-order-page.component';
import { VoucherConfirmationPageComponent } from './voucher-confirmation-page/voucher-confirmation-page.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ImpressumPageComponent } from './impressum-page/impressum-page.component';
import { FaqPageComponent} from './faq-page/faq-page.component';
import { DataPrivacyPageComponent} from './data-privacy-page/data-privacy-page.component';
import { AgbPageComponent} from './agb-page/agb-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OverviewPageComponent,
    DetailViewPageComponent,
    VoucherOrderPageComponent,
    VoucherConfirmationPageComponent,
    BottomBarComponent,
    ImpressumPageComponent,
    FaqPageComponent,
    DataPrivacyPageComponent,
    AgbPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
