import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Directive({
  selector: '[scrollTrigger]',
})
export class ScrollTriggerDirective implements AfterViewInit {
  @Input() start = '550';
  @Input() end = '400';

  constructor(private el: ElementRef) {}

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
      opacity: 0,
    });
  }
}
