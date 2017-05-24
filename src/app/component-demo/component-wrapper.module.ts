import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MarkdownModule} from "angular2-markdown";
import {TableModule} from "../components/table/table.module";
import {PagerModule} from "../components/pagination/pager/pager.module";
import {PagerDemoComponent} from "./pager-demo/pager-demo.component";
import {ComponentWrapperComponent} from "./component-wrapper.component";
import {TableDemoComponent} from "./table-demo/table-demo.component";

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule,
    TableModule,
    PagerModule,
    FormsModule
  ],
  declarations: [ComponentWrapperComponent,
    TableDemoComponent,
    PagerDemoComponent
  ],
  exports: [ComponentWrapperComponent,
    TableDemoComponent,
    PagerDemoComponent]
})
export class ComponentWrapperModule {
}
