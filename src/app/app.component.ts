import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // of('My', 'Name', 'is', 'Jatin').subscribe((name)=> console.log(name));

    of('Jatin', 'Kamboj').subscribe({
      next: (name) => console.log(`of : my name is ${name}`),
      error: (err) => console.log(`of : some error occured ${err}`),
      complete: () => console.log('of method completed'),
    });

    from(['Jatin', 'Kamboj']).subscribe({
      next: (name) => console.log(`for : my name is ${name}`),
      error: (err) => console.log(`for : some error occured ${err}`),
      complete: () => console.log('for method completed'),
    });
  }
}
