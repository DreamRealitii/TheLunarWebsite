import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'playground', component: PlaygroundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
