import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {ColumnComponent} from "./components/column/column.component";
import {TableCellDirective} from "./components/table/table-cell.directive";

@Directive({
  selector: '[appColumn]'
})
export class ColumnDirective {

  @Input()
  @ContentChild(TableCellDirective, { read: TemplateRef })
  cellTemplate: TemplateRef<any>;
  constructor() { }

}
