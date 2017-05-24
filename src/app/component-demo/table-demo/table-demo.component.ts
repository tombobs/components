import { Component, OnInit } from '@angular/core';
declare const require: any;

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {

  rows: Array<any>;
  columns: Array<{key: string, heading: string}>;
  tableComponent = {markdown: require('../../components/table/readme.md'), name: 'Table'};
  constructor() {
    this.rows = [
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
    this.columns = [
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
  }

  ngOnInit() {
  }



}
