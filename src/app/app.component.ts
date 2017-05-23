import {Component} from '@angular/core';
import {Page} from "./components/pagination/page";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = new Page();
  rows = [
    {
      columnOne: 'some',
      columnTwo: 'tabular',
      columnThree: 'data'
    },
    {
      columnOne: 'without',
      columnTwo: 'writing',
      columnThree: 'any'
    },
    {
      columnOne: 'mark',
      columnTwo: 'up',
      columnThree: 'hooray'
    }
  ];
  columns = [
    {
      key: 'columnOne',
      heading: 'Column One'
    },
    {
      key: 'columnTwo',
      heading: 'Column Two'
    },
    {
      key: 'columnThree',
      heading: 'Column Three'
    }
  ];

  onPageChange = (pageEvent) => {
    this.page.pageNumber = pageEvent.page;
  }
}
