import { OnInit } from '@angular/core';
import { ClickService } from './services/click.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ClickService]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.clickService.getSum().subscribe(clicks=> {
      this.allClicks=clicks;
    });
  }
  title = 'sekcja13klikacz';
  allClicks:number;

  constructor(private clickService: ClickService) { }
}
