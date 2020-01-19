import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PartialsModule } from "../../../partials/partials.module";
import { SlaiteProductOverviewComponent } from './slaite-product-overview.component';
import { OverviewDesignStepsComponent } from '../overview-design-steps/overview-design-steps.component';

@NgModule({
  declarations: [
	  SlaiteProductOverviewComponent,
	  OverviewDesignStepsComponent
	],
  imports: [
	CommonModule,
	PartialsModule,
	RouterModule.forChild([
		{
			path: "",
			children: [
				{
					path: "upload",
					component: SlaiteProductOverviewComponent,
				},
			]
		}
	])
  ],
  providers: []
})
export class SlaiteProductOverviewModule { }
