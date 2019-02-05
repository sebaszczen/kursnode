import { ClickService } from './../services/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css']
})
export class Klikacz2Component implements OnInit {

  click:number=0;

  add(){
    this.click+=1;
    this.clickService.addClicks();
  }

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

}
