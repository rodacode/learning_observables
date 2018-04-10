import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  observable$;
  mySubject$;

  ngOnInit(){

    
    this.mySubject$  = new Subject();
    this.mySubject$.subscribe(x => console.log('first subcribe',x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    this.mySubject$.subscribe(x => console.log('second subcribe',x));
    this.mySubject$.next(3);

    /*
    this.observable$ = Observable.create((observer)=> {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });
    this.observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end')
    );
    */
  }

  ngOnDestroy(){
    //this.observable$.unsubcribe();
    this.mySubject$.unsubcribe();
  }
}
