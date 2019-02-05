import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sekcja7';
  name = 'adam';
  weekDays = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];
  dogList: Dog[] = [];
  weekDays2 = ['poniedzialek', 'wtorek', 'sroda', 'czwartek', 'piatek', 'sobota', 'niedziela'];
  isVisible=false;
  isHidden=false;
  // dogList;
  unvisible() { this.isVisible=!this.isVisible;}
  unhidden() { this.isHidden=!this.isHidden;}


  addDogs() { this.dogList=[new Dog('mars', 5), new Dog('rex',12), new Dog('wacek',2)];}
  removeDogs() { this.dogList=[];}

}

class Dog {
  constructor (public name: string ,public age: number){}
}
