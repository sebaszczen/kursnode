import { Task } from "./../models/task";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class TasksService {
  private taskList: Array<Task> = [];
  private doneList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.taskList = [
      { name: "sprzatanie", created: new Date() },
      { name: "gotowanie", created: new Date() },
      { name: "pranie", created: new Date() }
    ];
    this.taskListObs.next(this.taskList);
  }
  add(task: Task): void {
    this.taskList.push(task);
    this.taskListObs.next(this.taskList);
  }
  done(task: Task) {
    this.doneList.push(task);
    this.remove(task);
    this.doneListObs.next(this.doneList);
  }
  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e != task);
    this.taskListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  getdoneListObs(): Observable<Array<Task>> {
    return this.doneListObs.asObservable();
  }
}
