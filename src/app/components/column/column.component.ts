import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column: string;
  constructor() { }

  ngOnInit() {
  }

}
