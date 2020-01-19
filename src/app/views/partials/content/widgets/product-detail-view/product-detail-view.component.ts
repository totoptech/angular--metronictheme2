import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {

	@Input() imgSrc: string;			// image link as string
	@Input() label: string;				// product full name as string
	@Input() startingPrice: string;		// product starting price as string
	@Input() availableSize: string;  	// product available sizes as string
	@Input() colors: string[];			// available colors as string array
	@Input() serial: string;			// product serial number

  constructor() { }

  ngOnInit() {
  }

}
