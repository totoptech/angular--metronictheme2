// Angular
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// Core Module
import { CoreModule } from "../../../core/core.module";
import { PartialsModule } from "../../partials/partials.module";
import { WelcomeComponent } from "./welcome.component";

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from '@angular/material/icon';


import { MatButtonModule } from "@angular/material";

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		MatCheckboxModule,
		MatIconModule,
		MatButtonModule,
		RouterModule.forChild([
			{
				path: "",
				component: WelcomeComponent
			}
		])
	],
	providers: [],
	declarations: [WelcomeComponent]
})
export class WelcomeModule {}
