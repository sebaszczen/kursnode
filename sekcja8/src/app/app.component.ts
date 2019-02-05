import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sekcja8';
  text='property-binding';
  text2='';
  button=true;
  showclick='';

  inputText='text';
  maxlength=5;
  colorclass='color';
  logourl='';
  isDisabled=true;
  isDisabled2=true;
  inputText2='';
  profession='programista';
  skill='angular';
//   inputP(event){
// this.profession=event.target.value;
//   }
//   inputS(event){
//     this.skill=event.target.value;
//   }
  constructor(){
    setTimeout(()=>{
      this.isDisabled=false;
    },8000);
  }
change(){
  this.inputText='zmiana tekstu i koloru';
  this.maxlength=10;
  this.colorclass='color2';
  this.logourl='https://angular.io/assets/images/logos/angular/angular.png';
}

  click(event) {
    this.showclick='przycik aktywny!';
    this.button=false;
  }

  onFocus(){
    this.colorclass='color3';
  }

  onClick(event){
console.log(event);
  }
  onMouseMove(event){
console.log('x: '+event.clientX+'y: '+event.clientY);
  }
  onPaste(){
    this.inputText2='nie wklejaj, wpisz';
  }
  change2(){
    this.isDisabled2=false;
  }

}
