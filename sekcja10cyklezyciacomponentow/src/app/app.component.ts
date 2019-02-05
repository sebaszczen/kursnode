import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cyklezyciacomponentow';
  dog=new Dog('reksio');
  show=true;

  changeTitle(){
    this.title='nowy tytol';
  }
  nothing(){

  }
  changeDog(){
    this.dog=new Dog('nowy pies');
  }
  destroy(){
    this.show=!this.show;
  }
}

export class Dog{
  constructor(name:string){
  }
}
}
