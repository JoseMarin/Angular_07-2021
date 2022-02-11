import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'characters', component: CharacterListComponent },
  {path:'characters/:id', component: CharacterDetailComponent },
  {path:'', component: HomeComponent },
  {path:'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
