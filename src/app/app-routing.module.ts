import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from './hello/hello.component'
import {FormComponent} from './form/form.component'

const routes: Routes = [
  { path: '', component: HelloComponent, pathMatch:'full'},
  { path: 'create', component: FormComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }