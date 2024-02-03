import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LayoutContainerComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule],
})
export class LayoutModule {}
