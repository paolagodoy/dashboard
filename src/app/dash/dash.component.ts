import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  titles= {
    miniCards: {
      one: 'Total Account',
      two: 'Total Credits',
    }
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
