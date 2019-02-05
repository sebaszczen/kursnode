import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appDate]"
})
export class DateDirective {
  @Input()
  private date: Date;
  private paragraph;



  @HostListener("mouseenter")
  mouse(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.reference.nativeElement,this.paragraph);
  }

  @HostListener("mouseleave")
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.reference.nativeElement,this.paragraph);
  }

  constructor(private reference: ElementRef,private renderer: Renderer2) {
    this.paragraph = renderer.createElement("p");
  }
}
