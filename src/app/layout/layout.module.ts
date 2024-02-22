import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LayoutContainerComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule,NgOptimizedImage],
})
export class LayoutModule {}
