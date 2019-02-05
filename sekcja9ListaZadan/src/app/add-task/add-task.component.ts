import { TasksService } from './../services/tasks.service';
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";
import { Task } from '../models/task';

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  newTaskName: string;
  // @Output()
  // emitTask = new EventEmitter();
  constructor(private TasksService: TasksService) {}

  ngOnInit() {}

  add() {
    // this.emitTask.emit(this.newTask);
    const task: Task={name:this.newTaskName,created:new Date()};
    this.TasksService.add(task);
    this.newTaskName = "";
  }
}
