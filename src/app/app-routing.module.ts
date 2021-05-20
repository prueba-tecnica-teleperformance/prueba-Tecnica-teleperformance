import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';

const routes: Routes = [
	{path: '', component: ListarProductoComponent},
	{path: 'crear-producto', component: CrearProductoComponent},
	{path: 'crear-producto/:id', component: CrearProductoComponent},
	{path: 'bootstrap', component: BootstrapComponent},
	{path: 'angular-material', component: AngularMaterialComponent},
	{path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule{}