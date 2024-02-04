import { Component } from '@angular/core';
import { valores } from './shared/valores';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent {
  public valores = valores;

  public trackbyFn(index: number) {
    return indexedDB;
  }
}
