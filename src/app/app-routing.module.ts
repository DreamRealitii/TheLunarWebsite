import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
