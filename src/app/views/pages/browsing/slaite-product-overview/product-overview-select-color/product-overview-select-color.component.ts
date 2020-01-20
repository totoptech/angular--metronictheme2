import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-product-overview-select-color',
  templateUrl: './product-overview-select-color.component.html',
  styleUrls: ['./product-overview-select-color.component.scss']
})
export class ProductOverviewSelectColorComponent implements OnInit {
	currentJustify: string;
  constructor() { }

  ngOnInit() {
	  this.currentJustify = 'start';
  }

}
