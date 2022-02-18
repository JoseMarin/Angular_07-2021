import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { HomeComponent } from './home/home/home.component';
import { CharacterAddComponent } from './character/character-add/character-add.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AdminGuardService } from './services/auth/admin-guard.service';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:'characters', component: CharacterListComponent,canActivate: [AuthGuardService]},
  {path:'characters/:id', component: CharacterDetailComponent,canActivate: [AuthGuardService, AdminGuardService] },
  {path:'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path:'add', component:  CharacterAddComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path:'register', component:  RegisterComponent},
  {path:'login', component:  LoginComponent},
  {path:'', component: HomeComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
