import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-product-overview-upload',
  templateUrl: './product-overview-upload.component.html',
  styleUrls: ['./product-overview-upload.component.scss']
})
export class ProductOverviewUploadComponent implements OnInit {

	colors: string[];
  constructor() { }

  ngOnInit() {
	this.colors = [
		'white',
		'red',
		'green',
		'blue',
		'chartreuse',
		'tan',
		'yello',
		'orange',
		'chartreuse',
		'tan',
		'yello',
		'orange',
		'pink',
		'purple',
		'black',
		'red',
		'green',
		'blue',
		'chartreuse',
		'pink',
		'purple',
		'red',
		'gray',
		'green',
		'blue',
		'tan',
		'yello',
		'orange',
		'pink',
		'purple'
	];
  }

}
