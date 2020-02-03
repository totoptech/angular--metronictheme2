import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-slaite-product-overview',
  templateUrl: './slaite-product-overview.component.html',
  styleUrls: ['./slaite-product-overview.component.scss']
})
export class SlaiteProductOverviewComponent implements OnInit {

	@Input() page: string;
  constructor() { }

  ngOnInit() {
	  if(!this.page) this.page = "Design Product";
  }

}
