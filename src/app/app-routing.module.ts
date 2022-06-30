import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnDevComponent } from './core/components/on-dev/on-dev.component';
import { MainComponent } from './public/components/main/main.component';

const routes: Routes = [ { path: '', component: MainComponent } , {path:'onDev', component: OnDevComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
