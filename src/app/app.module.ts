import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

import { AlertaService } from './alerta.service';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [AlertaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
