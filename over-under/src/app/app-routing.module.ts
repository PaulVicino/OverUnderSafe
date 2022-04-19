import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AnimalLifeSpanListComponent } from './components/animal-life-span-list.component';

const routes: Routes = [
  // { path: '', redirectTo: 'animallifespans', pathMatch: 'full' },
  // { path: 'animallifespans', component: AnimalLifeSpanListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
