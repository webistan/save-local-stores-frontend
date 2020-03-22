import { Component, OnInit } from '@angular/core';

import { APP_NAME_UPPERCASE, DOMAIN_NAME } from '../model/global';

@Component({
  selector: 'app-agb-page',
  templateUrl: './agb-page.component.html',
  styleUrls: ['./agb-page.component.css']
})
export class AgbPageComponent implements OnInit {
  upperCaseAppName: string
  domainName: string

  constructor() {
    this.upperCaseAppName = APP_NAME_UPPERCASE
    this.domainName = DOMAIN_NAME
  }

  ngOnInit(): void {
  }

}
