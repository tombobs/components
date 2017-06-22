import {Component, OnInit, TemplateRef} from '@angular/core';
import {LinkColumn, TableColumn} from "../../components/table/table.interfaces";
declare const require: any;

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.scss']
})
export class TableDemoComponent implements OnInit {

  rows: Array<any>;
  columns: Array<any>;// [LinkColumn, TableColumn, TableColumn]
  tableComponent = {markdown: require('../../components/table/readme.md'), name: 'Table'};
  constructor() { }

  ngOnInit() {
    this.rows = [
      {
        columnOne: 'some',
        columnTwo: 'tabular',
        columnThree: 'data',
        id: 1
      },
      {
        columnOne: 'without',
        columnTwo: 'writing',
        columnThree: 'any',
        id: 2
      },
      {
        columnOne: 'mark',
        columnTwo: 'up',
        columnThree: 'hooray',
        id: 3
      }
    ];
    this.columns = [
      {
        key: 'columnOne',
        heading: 'Column One',
        type: 'link',
        path: 'lol',
        cellTemplate: true
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



}
