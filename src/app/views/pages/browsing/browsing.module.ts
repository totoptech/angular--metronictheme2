import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { PartialsModule } from "../../partials/partials.module";
import { BrowsingComponent } from './browsing.component';
import {
  MatExpansionModule,
  MatButtonModule,
} from '@angular/material';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

@NgModule({
  declarations: [BrowsingComponent, ProductDetailPageComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    CdkTreeModule,
    MatTreeModule,
	MatIconModule,
	PartialsModule,
    MatProgressBarModule,
    RouterModule.forChild([
			{
				path: "",
				children: [
					{
						path: "",
						component: BrowsingComponent,
					},
					{
						path: 'details',
						component: ProductDetailPageComponent,
					},
					{
						path: 'overview',
						loadChildren: () => import('./slaite-product-overview/slaite-product-overview.module').then(m=> m.SlaiteProductOverviewModule)
					}
				]
			}
		])
  ],
  providers: []
})
export class BrowsingModule { }
