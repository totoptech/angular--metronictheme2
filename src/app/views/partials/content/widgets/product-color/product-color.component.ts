import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-product-color',
  templateUrl: './product-color.component.html',
  styleUrls: ['./product-color.component.scss']
})
export class ProductColorComponent implements OnInit {

	@Input() active: boolean;
	@Input() color: string;
	className: string;
  constructor() { }

  ngOnInit() {
	if(!this.active) this.active = true;
	if(!this.color) this.className=undefined;
	else this.className="kt-product-color__"+this.color;
	console.log(this.color, this.className);
  }

}
