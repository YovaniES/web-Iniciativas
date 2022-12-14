import { NgModule } from '@angular/core';

import { IniciativaRoutingModule } from './iniciativa-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegistroComponent } from './registros/registro.component';
import { ModalCrearIniciativaComponent } from './registros/crear-iniciativa/modal-crear-iniciativa.component';
import { ModalActualizarIniciativaComponent } from './registros/actualizar-iniciativa/modal-actualizar-iniciativa.component';
import { ReporteIniciativaComponent } from './registros/reporte-iniciativa/reporte-iniciativa.component';

@NgModule({
  declarations: [
    RegistroComponent,
    ModalActualizarIniciativaComponent,
    ReporteIniciativaComponent,
    ModalCrearIniciativaComponent,
  ],
  exports:[
    ModalActualizarIniciativaComponent,
  ],
  imports: [
    IniciativaRoutingModule,
    CoreModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MaterialModule,
  ],
  providers: [DatePipe],
})

export class IniciativaModule { }
