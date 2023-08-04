import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from './ece/hello.component'
import {FormComponent} from './cse/form.component'
import {EditComponent} from './eee/edit.component'

const routes: Routes = [
  { path: '', component: HelloComponent, pathMatch:'full'},
  { path: 'ece', component: HelloComponent},
  { path: 'cse', component: FormComponent},
  { path: 'eee', component: EditComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
