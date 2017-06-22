import {
  AfterViewInit,
  Component, ContentChild, ContentChildren, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
import {TableColumn} from "./table.interfaces";
import {ColumnComponent} from "../column/column.component";

@Component({
  selector: 'ig-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TableComponent implements AfterViewInit {

  @Input() rows: Array<any>;
  @Input() columns: Array<TableColumn>;
  @ContentChildren('.column', {read: ViewContainerRef}) columnTemplates: QueryList<ViewContainerRef>;

  ready = false;
  templates = {};

  constructor() {
  }


  ngAfterViewInit() {
    setTimeout(() => {
      debugger
      this.columnTemplates.forEach(t => {
        const columnName = t['element'].nativeElement.getAttribute('column')
        console.log(columnName)
        this.templates[columnName] = t;
        // this.templates[t['element'].nativeElement.getAttribute('column')] = t;
        // if (t['element'].nativeElement.classList.contains('lol')) {
        //
        // }
      });
      this.ready = true;

    });
    // this.columnTemplates.changes.subscribe((r) => {
    //   console.log(this.columnTemplates);
    // })
  }
}
