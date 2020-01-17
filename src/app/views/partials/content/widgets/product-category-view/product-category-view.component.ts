import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-product-category-view',
  templateUrl: './product-category-view.component.html',
  styleUrls: ['./product-category-view.component.scss']
})
export class ProductCategoryViewComponent implements OnInit {

	@Input() imgSrc: string;
	@Input() productCatetory: string;
  constructor() { }

  ngOnInit() {
  }

}
