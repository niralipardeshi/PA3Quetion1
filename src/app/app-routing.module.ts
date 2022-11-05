import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentsComponent } from './first-components/first-components.component';
import { UserdataComponent } from './userdata/userdata.component';
 
const routes: Routes = [
  {path:'first',component:FirstComponentsComponent},
  {path:'',component:FirstComponentsComponent},
  {path:'user',component:UserdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
