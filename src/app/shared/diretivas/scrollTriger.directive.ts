import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[scrollTrigger]',
})
export class ScrollTriggerDirective implements AfterViewInit {
  @Input() start!: string;
  @Input() end!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const larguraTela = screen.width;

    if (larguraTela <= 768) {
      this.start = '780';
      this.end = '670';
    } else if (larguraTela <= 1366) {
      this.start = '550';
      this.end = '400';
    } else if (larguraTela <= 1980) {
      this.start = '830';
      this.end = '670';
    } else {
      this.start = '1150';
      this.end = '1100';
    }
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    this.initScroll();
  }

  initScroll() {
    gsap.from(this.el.nativeElement, {
      scrollTrigger: {
        trigger: this.el.nativeElement,
        scrub: true,
        // markers: true,
        start: `top ${this.start}px`,
        end: `bottom ${this.end}px`,
      },
      duration: 1,
      y: '25px',
      opacity: 0,
    });
  }
}
