import { Component, OnInit } from '@angular/core';
import { Offer } from '../model/offer';

@Component({
  selector: 'app-detail-view-page',
  templateUrl: './detail-view-page.component.html',
  styleUrls: ['./detail-view-page.component.css']
})
export class DetailViewPageComponent implements OnInit {
  offer: Offer

  constructor() {
  }

  ngOnInit(): void {
  }
}
