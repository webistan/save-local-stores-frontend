import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { DetailViewPageComponent } from './detail-view-page/detail-view-page.component';
import { VoucherOrderPageComponent } from './voucher-order-page/voucher-order-page.component';
import { VoucherConfirmationPageComponent } from './voucher-confirmation-page/voucher-confirmation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OverviewPageComponent,
    DetailViewPageComponent,
    VoucherOrderPageComponent,
    VoucherConfirmationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
