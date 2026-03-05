import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { PlaygroundComponent } from './playground/playground.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MyselfComponent } from './myself/myself.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creations', component: CreationsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'myself', component: MyselfComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
