import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { NgbModule, NgbTabset, NgbTab } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from "../../../partials/partials.module";
import { SlaiteProductOverviewComponent } from './slaite-product-overview.component';
import { OverviewDesignStepsComponent } from '../overview-design-steps/overview-design-steps.component';
import { ProductOverviewUploadComponent } from './product-overview-upload/product-overview-upload.component';
import { ProductOverviewSelectColorComponent } from './product-overview-select-color/product-overview-select-color.component';

@NgModule({
  declarations: [
	  SlaiteProductOverviewComponent,
	  OverviewDesignStepsComponent,
	  ProductOverviewUploadComponent,
	  ProductOverviewSelectColorComponent
	],
  imports: [
	CommonModule,
	PartialsModule,
	NgbModule,
	RouterModule.forChild([
		{
			path: "",
			component: SlaiteProductOverviewComponent,
			children: [
				{
					path: "upload",
					component: ProductOverviewUploadComponent,
				},
				{
					path: "select-colour",
					component: ProductOverviewSelectColorComponent,
				}
			]
		}
	])
  ],
  exports: [
	NgbTabset,
	NgbTab
  ],
  providers: []
})
export class SlaiteProductOverviewModule { }
