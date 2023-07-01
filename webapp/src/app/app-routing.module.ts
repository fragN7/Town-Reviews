import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddComponent} from "./add/add.component";
import {BrowseComponent} from "./browse/browse.component";

const routes : Routes = [
  {path: '', component: BrowseComponent},
  {path: 'review/:id', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
