import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './container/container.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

@NgModule({
  declarations: [ContainerComponent, FaleConoscoComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
