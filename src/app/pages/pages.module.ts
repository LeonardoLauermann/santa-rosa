import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './container/container.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ProdutosServicosComponent } from './produtos-servicos/produtos-servicos.component';

@NgModule({
  declarations: [
    ContainerComponent,
    FaleConoscoComponent,
    EmpresaComponent,
    ProdutosServicosComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
