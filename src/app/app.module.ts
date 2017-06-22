import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {ComponentWrapperModule} from "./component-demo/component-wrapper.module";
import {AppRoutingModule} from "./app-routing.module";
import {TargetComponent} from "./component-demo/target/target.component";
import { ColumnDirective } from './column.directive';

@NgModule({
  declarations: [
    AppComponent,
    TargetComponent,
    ColumnDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentWrapperModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
