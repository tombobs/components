import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ig-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() rows: Array<any>;
  @Input() columns: Array<{key: string, heading: string}>;

  constructor() { }

  ngOnInit() {
  }

}
