import { Task } from './../models/task';
import { Component, OnInit, Input } from "@angular/core";
import { TasksService } from "../services/tasks.service";

@Component({
  selector: "app-done-task",
  templateUrl: "./done-task.component.html",
  styleUrls: ["./done-task.component.css"]
})
export class DoneTaskComponent implements OnInit {
  doneList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getdoneListObs().subscribe((doneTasks:Array<Task>) => {
      this.doneList = doneTasks;
    });
  }

  ngOnInit() {}
}
