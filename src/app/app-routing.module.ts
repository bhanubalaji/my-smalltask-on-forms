import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterdataComponent } from './enterdata/enterdata.component';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'entry',component:EntryComponent},
  {path:'enterdata',component:EnterdataComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
