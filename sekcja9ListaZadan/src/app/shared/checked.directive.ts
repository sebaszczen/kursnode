import { Directive, ElementRef, Renderer2, OnInit } from "@angular/core";

@Directive({
  selector: "[appChecked]"
})
export class CheckedDirective implements OnInit {

  ngOnInit(): void {
    let li = this.el.nativeElement;
    this.renderer.setStyle(li, "list-style-image", "url(/assets/checked.png");
    this.renderer.setStyle(li, "background", "aquamarine");
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
