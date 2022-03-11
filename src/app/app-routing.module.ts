import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TechDetailsComponent } from './tech-details/tech-details.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponentComponent },
  { path: 'second-component', component: SecondComponentComponent },
  { path: 'third-component', component: ThirdComponentComponent },
  { path: 'technologies/:id', component: TechDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
