import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, } from '@angular/material';
import { CoreModule } from '../../../../core/core.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// Datatable
import { DataTableComponent } from './general/data-table/data-table.component';
// General widgets
import { Widget1Component } from './widget1/widget1.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget12Component } from './widget12/widget12.component';
import { Widget14Component } from './widget14/widget14.component';
import { Widget26Component } from './widget26/widget26.component';
import { Timeline2Component } from './timeline2/timeline2.component';

// Slaite Components
import { SlaiteLabelComponent } from './slaite-label/slaite-label.component';
import { SlaiteSearchComponent } from './slaite-search/slaite-search.component';
import { ProductWrapperDefaultComponent } from './product-wrapper-default/product-wrapper-default.component';
import { ProductCategoryViewComponent } from './product-category-view/product-category-view.component';
import { ProductShapeViewComponent } from './product-shape-view/product-shape-view.component';
import { ProductDetailViewComponent } from './product-detail-view/product-detail-view.component';
import { ProductColorComponent } from './product-color/product-color.component';
import { ProductSelectBoxComponent } from './product-select-box/product-select-box.component';
import { ProductDetailsRightComponent } from './product-details-right/product-details-right.component';
import { SlaiteRoundButtonComponent } from './slaite-round-button/slaite-round-button.component';

@NgModule({
	declarations: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,

		// Declare Slaite Components
		SlaiteLabelComponent,
		SlaiteSearchComponent,
		ProductWrapperDefaultComponent,
		ProductCategoryViewComponent,
		ProductShapeViewComponent,
		ProductDetailViewComponent,
		ProductColorComponent,
		ProductSelectBoxComponent,
		ProductDetailsRightComponent,
		SlaiteRoundButtonComponent
	],
	exports: [
		DataTableComponent,
		// Widgets
		Widget1Component,
		Widget4Component,
		Widget5Component,
		Widget12Component,
		Widget14Component,
		Widget26Component,
		Timeline2Component,
		// Exports Slaite Components
		SlaiteLabelComponent,
		ProductCategoryViewComponent,
		ProductShapeViewComponent,
		ProductDetailViewComponent,
		ProductSelectBoxComponent,
		ProductDetailsRightComponent,
		SlaiteRoundButtonComponent
	],
	imports: [
		CommonModule,
		PerfectScrollbarModule,
		MatTableModule,
		CoreModule,
		MatIconModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatPaginatorModule,
		MatSortModule,
	]
})
export class WidgetModule {
}
