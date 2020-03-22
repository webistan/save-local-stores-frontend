import { Component, OnInit } from '@angular/core';

import { DOMAIN_NAME, WWW_DOMAIN_NAME } from '../model/global';

@Component({
  selector: 'app-impressum-page',
  templateUrl: './impressum-page.component.html',
  styleUrls: ['./impressum-page.component.css']
})
export class ImpressumPageComponent implements OnInit {
  domainName: string
  wwwDomainName: string

  constructor() {
    this.domainName = DOMAIN_NAME
    this.wwwDomainName = WWW_DOMAIN_NAME
  }

  ngOnInit(): void {
  }
}
