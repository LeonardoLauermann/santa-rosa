import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
