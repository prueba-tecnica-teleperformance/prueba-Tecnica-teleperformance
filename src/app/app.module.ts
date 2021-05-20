import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http'
// componentes
import { AppComponent } from './app.component';
import {ToolbarComponent } from './components/toolbar/toolbar.component';
import {CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// MAterials
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
//librerias
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductoComponent,
    ToolbarComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
