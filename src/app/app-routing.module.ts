import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TableDemoComponent} from "./component-demo/table-demo/table-demo.component";
import {AppComponent} from "./app.component";
import {TargetComponent} from "./component-demo/target/target.component";

const appRoutes: Routes = [
  {path: 'a', component: AppComponent},
  { path: 'lol/:id', component: TargetComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
