import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-product-category-view',
  templateUrl: './product-category-view.component.html',
  styleUrls: ['./product-category-view.component.scss']
})
export class ProductCategoryViewComponent implements OnInit {

	@Input() imgSrc: string;				// image link as string
	@Input() productCatetory: string;		// category name
  constructor() { }

  ngOnInit() {
  }

}
