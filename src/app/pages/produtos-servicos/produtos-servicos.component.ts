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
  slideConfig = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  showOverlay(event: MouseEvent) {
    this.overlayVisible = true;
  }

  hideOverlay(event: MouseEvent) {
    this.overlayVisible = false;
  }
}
