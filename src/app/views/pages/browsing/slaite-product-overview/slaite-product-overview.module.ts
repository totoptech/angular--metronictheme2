import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { PartialsModule } from "../../../partials/partials.module";
import { SlaiteProductOverviewComponent } from './slaite-product-overview.component';
import { OverviewDesignStepsComponent } from '../overview-design-steps/overview-design-steps.component';
import { ProductOverviewUploadComponent } from './product-overview-upload/product-overview-upload.component';

@NgModule({
  declarations: [
	  SlaiteProductOverviewComponent,
	  OverviewDesignStepsComponent,
	  ProductOverviewUploadComponent
	],
  imports: [
	CommonModule,
	PartialsModule,
	RouterModule.forChild([
		{
			path: "",
			component: SlaiteProductOverviewComponent,
			children: [
				{
					path: "upload",
					component: ProductOverviewUploadComponent,
				},
			]
		}
	])
  ],
  providers: []
})
export class SlaiteProductOverviewModule { }
