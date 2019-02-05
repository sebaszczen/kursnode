import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from "@angular/core";
import { Dog } from "../app.component";
@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnChanges, OnInit{


  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  ngOnInit() { }
  @Input()
  inputText: string;
  @Input()
  inputDog: Dog;
  show = true;
  content() {
    this.show = !this.show;
  }
}
