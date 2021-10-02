import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @Input('dropdown-class') className: string;
  isClicked = false;

  constructor(private _reference: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit() {
    this.className = 'show';
  }

  @HostListener('click') onClick() {
    if (this._reference?.nativeElement?.children == null) return;
    this.isClicked = !this.isClicked;

    let childElement = {};
    const parentElement = this._reference.nativeElement;
    const collectionElement = this._reference.nativeElement.children as HTMLCollection;

    Array.from(collectionElement).forEach(element => {
      if (element.className.includes('dropdown-menu')) {
        childElement = element;
      }
    });

    if (this.isClicked) {

      this._renderer.addClass(parentElement, this.className);
      this._renderer.addClass(childElement, this.className);

    } else {

      this._renderer.removeClass(parentElement, this.className)
      this._renderer.removeClass(childElement, this.className);
    }
  }
}
