import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PagesRoutingModule } from 'src/app/pages/pages-routing.module';
import { ContainerComponent } from 'src/app/pages/container/container.component';
import { ContatoComponent } from 'src/app/pages/contato/contato.component';
import { EmpresaComponent } from 'src/app/pages/empresa/empresa.component';
import { ProdutosServicosComponent } from 'src/app/pages/produtos-servicos/produtos-servicos.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { ScrollTriggerDirective } from 'src/app/shared/diretivas/scrollTriger.directive';

@NgModule({
  declarations: [
    ContainerComponent,
    ContatoComponent,
    EmpresaComponent,
    ProdutosServicosComponent,
    HomeComponent,
    ScrollTriggerDirective,
  ],
  imports: [CommonModule, PagesRoutingModule, CarouselModule.forRoot()],
})
export class PagesModule {}
