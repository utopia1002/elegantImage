import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: StartComponent, pathMatch: 'full'},
  {path: 'main', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
