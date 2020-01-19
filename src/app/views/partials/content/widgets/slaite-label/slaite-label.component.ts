import { Component, OnInit, Input } from '@angular/core';

export interface Params {
	text: string;				// Content of Label
	size?: string;				// Size of Text (header, title, para, content)
	color?: string;				// primary(black), gray, blue, danger, red
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
			};
		} else {
			this.param = {
				text: this.param.text?this.param.text:"Label Component",
				size: this.param.size?this.param.size:"header",
				color: this.param.color?this.param.color:"primary",
				textClass: this.param.textClass?this.param.textClass:"",
				weight: this.param.weight?this.param.weight:"400",
			}
		}

		// Prefix of Slaite Label Class
		const classPrefix:string = "slate-label__";

		// Slaite Label size class name
		let sizeClass: string = "";
		sizeClass = classPrefix + this.param.size;

		// Slaite Label color class name
		let colorClass: string = "";
		colorClass = classPrefix + this.param.color;

		if(this.param.textClass != "")
			this.className = this.param.textClass + " ";
		else this.className = "";

		// Slaite Label color class name
		let fontWeightClass: string = "";
		fontWeightClass = classPrefix + this.param.weight;

		// Combine Classes
		this.className += sizeClass + " " + colorClass + " " + fontWeightClass + " kt-slaite-label__padding";

	}

}
