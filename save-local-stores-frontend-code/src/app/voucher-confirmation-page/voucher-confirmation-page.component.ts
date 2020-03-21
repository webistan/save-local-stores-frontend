import { Component, OnInit } from '@angular/core';

import { APP_NAME } from '../model/global';

@Component({
  selector: 'app-voucher-confirmation-page',
  templateUrl: './voucher-confirmation-page.component.html',
  styleUrls: ['./voucher-confirmation-page.component.css']
})
export class VoucherConfirmationPageComponent implements OnInit {
  appTitle: string

  constructor() {
    this.appTitle = APP_NAME
  }

  ngOnInit(): void {
  }
}
