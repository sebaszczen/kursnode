import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<Task>=[];

  done(task){
    task.end=new Date();
    this.TasksService.done(task);
  }
  remove(task){
    this.TasksService.remove(task);
  }
  getColor(){
    return this.taskList.length>1?'green':'red';
  }

  constructor(private TasksService: TasksService) {

    this.TasksService.getTaskListObs().subscribe((task:Array<Task>)=>{
      console.log('tutaj');
      this.taskList=task;
    });
   }

  ngOnInit() {
  }

}
