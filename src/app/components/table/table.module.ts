import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from './table.component';
import {RouterLink, RouterModule} from "@angular/router";
import { TableCellComponent } from './table-cell/table-cell.component';
import { TableCellDirective } from './table-cell.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [RouterLink],
  declarations: [TableComponent, TableCellComponent, TableCellDirective, ],
  exports: [TableComponent]
})
export class TableModule { }
