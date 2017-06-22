import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MarkdownModule} from "angular2-markdown";
import {TableModule} from "../components/table/table.module";
import {PagerModule} from "../components/pagination/pager/pager.module";
import {PagerDemoComponent} from "./pager-demo/pager-demo.component";
import {ComponentWrapperComponent} from "./component-wrapper.component";
import {TableDemoComponent} from "./table-demo/table-demo.component";
import {LinkModule} from "../components/link/link.module";
import {ColumnModule} from "../components/column/column.module";

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    TableModule,
    PagerModule,
    FormsModule,
    LinkModule,
    ColumnModule
  ],
  declarations: [
    ComponentWrapperComponent,
    TableDemoComponent,
    PagerDemoComponent
  ],
  exports: [ComponentWrapperComponent,
    TableDemoComponent,
    PagerDemoComponent]
})
export class ComponentWrapperModule {
}
