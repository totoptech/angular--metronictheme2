import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kt-slaite-round-button',
  templateUrl: './slaite-round-button.component.html',
  styleUrls: ['./slaite-round-button.component.scss']
})
export class SlaiteRoundButtonComponent implements OnInit {

	@Input() label: string;
	@Input() color: string;

	className: string;
  constructor() { }

  ngOnInit() {
	  if(!this.label) this.label = "OK";
	  if(!this.color) this.className = undefined;
	  else this.className = "slaite-round-button__" + this.color;
  }

}
