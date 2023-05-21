import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodComponent } from './method/method.component';
import { DatasetComponent } from './method/dataset/dataset.component';
import { ScrumTimeComponent } from './scrum-time/scrum-time.component';
import { ProcessMapComponent } from './process-map/process-map.component';

const routes: Routes = [
  { path: '', redirectTo: 'scrumTime', pathMatch: 'full' },
  { path: 'method', component: MethodComponent },
  { path: 'dataset', component: DatasetComponent },
  {path:'scrumTime',component:ScrumTimeComponent},
  {path:"process",component:ProcessMapComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
