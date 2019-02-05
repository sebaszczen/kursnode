import { ChildComponent } from './child/child.component';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sekcja10';
  tasks=['sprzatanie kuwety', 'odkurzanie','bieganie','spanie','odpoczynek'];

  @ViewChild('childRef')
  childKomponent: ChildComponent;
  @ViewChild('inputText')
  tekstChild: ElementRef;


  selected(task:string):void{
    console.log(task);
  }
  print(inputText){
    this.tasks.push(inputText);
    // this.childKomponent.taskList=[];
    this.tekstChild.nativeElement.value='';
  }
}
