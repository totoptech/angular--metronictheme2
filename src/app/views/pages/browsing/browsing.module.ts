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

@NgModule({
  declarations: [BrowsingComponent],
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
				component: BrowsingComponent
			}
		])
  ],
  providers: []
})
export class BrowsingModule { }
