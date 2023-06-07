import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';

import {RegisterComponent} from './register/register.component';
import{LoginComponent} from './login/login.component';
import{SearchComponent} from './search/search.component';
import{HomePageComponent} from './home-page/home-page.component';
import {AuthGuardService} from './_services/auth-guard.service';
import {SearchpageComponent} from './searchpage/searchpage.component';


const routes: Routes = [{path:"",component:LoginComponent}
,{path:"register",component:RegisterComponent},
{path:"search",component:HomePageComponent,canActivate:[AuthGuardService]},
{path:"searchpage",component:SearchpageComponent,canActivate:[AuthGuardService]},
{path:"**",redirectTo:"/"}];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports:[RouterModule]
})
export class AppRoutingModule { }
