import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  //parent=> child
  @Input()
  taskList;
  @Output()
  taskEvent = new EventEmitter<string>();

  select(task) {
    this.taskEvent.emit(task);
  }
  constructor() {}

  ngOnInit() {}
}
