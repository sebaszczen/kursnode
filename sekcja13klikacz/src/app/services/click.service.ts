import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  private sumClicks=0;
  private sum= new Subject<number>();

  addClicks(){
    this.sumClicks+=1;
    this.sum.next(this.sumClicks);
    this.log.logger('klieknięcie!')
  }

  getSum(): Observable<number>{
    return this.sum.asObservable();
  }

  constructor(private log:LogService) { }
}
