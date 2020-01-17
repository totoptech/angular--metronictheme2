import { Component, OnInit, Input } from '@angular/core';

export interface Params {
	text: string;				// Content of Label
	size?: string;				// Size of Text (header, title, para, content)
	color?: string;				// primary(black), gray, blue, danger
	textClass?: string;			// class name of reusable component
	weight?: string;			// font-weight 400, 500, 600,
}

@Component({
  selector: 'kt-slaite-label',
  templateUrl: './slaite-label.component.html',
  styleUrls: ['./slaite-label.component.scss']
})
export class SlaiteLabelComponent implements OnInit {

	// Public Properties
	@Input() param: Params;
	public className: string;

	constructor() { }

	ngOnInit() {
		if (!this.param) {
			this.param = {
				text: "This is Slaite Reusable Label Component",
				size: "header",
				color: "primary",
				textClass: "",
				weight: "400",
			}
		}

		// Prefix of Slaite Label Class
		const classPrefix:string = "slate-label__";

		// Slaite Label size class name
		let sizeClass: string = "";
		sizeClass = classPrefix + this.param.size;
		console.log("label size:", sizeClass);

		// Slaite Label color class name
		let colorClass: string = "";
		colorClass = classPrefix + this.param.color;
		console.log("label color:", colorClass);

		this.className = this.param.textClass;

		// Slaite Label color class name
		let fontWeightClass: string = "";
		fontWeightClass = classPrefix + this.param.weight;
		console.log("label font weight:", fontWeightClass);

		// Combine Classes
		this.className += sizeClass + " " + colorClass + " " + fontWeightClass;

		let element = document.getElementById('slaite-label');
		element.className = this.className;
	}

}
