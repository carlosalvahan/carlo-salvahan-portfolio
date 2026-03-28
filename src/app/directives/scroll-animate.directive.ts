import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'show');
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    observer.observe(this.el.nativeElement);
  }

}
