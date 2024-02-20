import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-servicos',
  templateUrl: './produtos-servicos.component.html',
  styleUrls: ['./produtos-servicos.component.scss'],
})
export class ProdutosServicosComponent {
  overlayVisible: boolean = false;

  slides = [
    {
      img: 'assets/img/carroussel/solda.webp',
      alt: 'Solda',
      hover: 'Solda',
    },
    {
      img: 'assets/img/carroussel/acabamento.webp',
      alt: 'Acabamento',
      hover: 'Acabamento',
    },
    {
      img: 'assets/img/carroussel/montagem.webp',
      alt: 'Montagem',
      hover: 'Montagem',
    },
    {
      img: 'assets/img/carroussel/prensa.webp',
      alt: 'Prensa',
      hover: 'Prensa',
    },
    {
      img: 'assets/img/carroussel/retifica.webp',
      alt: 'Retifica',
      hover: 'Retifica',
    },
    {
      img: 'assets/img/carroussel/criacoes.webp',
      alt: 'Criações Próprias',
      hover: 'Criações Próprias',
    },
  ];

  itemsPerSlide = 3;
  singleSlideOffset = true;
  pauseOnFocus = true;
  noWrap = true;

  ngOnInit(): void {
    const larguraTela = screen.width;

    if (larguraTela <= 680) {
      this.itemsPerSlide = 1;
    } else if (larguraTela <= 960) {
      this.itemsPerSlide = 2;
    } else if (larguraTela <= 1366) {
      this.itemsPerSlide = 3;
    } else {
      this.itemsPerSlide = 4;
    }
  }

  showOverlay(event: MouseEvent) {
    this.overlayVisible = true;
    this.pauseOnFocus = true;
  }

  hideOverlay(event: MouseEvent) {
    this.overlayVisible = false;
    this.pauseOnFocus = false;
  }
}
