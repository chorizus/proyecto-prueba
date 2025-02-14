import { NgModule } from '@angular/core';
import { ChorizusMiBibliotecaComponent } from './chorizus-mi-biblioteca.component';
import { FormComponentComponent } from './form-component/form-component.component';



@NgModule({
  declarations: [
    ChorizusMiBibliotecaComponent,
    FormComponentComponent
  ],
  imports: [
  ],
  exports: [
    ChorizusMiBibliotecaComponent,
    FormComponentComponent
  ]
})
export class ChorizusMiBibliotecaModule { }
