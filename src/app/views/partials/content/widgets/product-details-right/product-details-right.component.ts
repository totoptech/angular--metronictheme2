import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-product-details-right',
  templateUrl: './product-details-right.component.html',
  styleUrls: ['./product-details-right.component.scss']
})
export class ProductDetailsRightComponent implements OnInit {

	colors: string[];
	sizes: string[];
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
	this.sizes = [
		'S',
		'M',
		'L',
		'XL',
		'2XL',
		'3XL',
		'4XL',
		'5XL',
		'6XL',
	]
  }

}
