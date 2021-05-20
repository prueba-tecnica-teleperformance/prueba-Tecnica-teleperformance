import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatButtonToggleModule,
		MatCardModule
	],
	exports:[
		MatButtonModule,
		MatIconModule,
		MatButtonToggleModule,
		MatCardModule
	]
})

export class MaterialModule{}