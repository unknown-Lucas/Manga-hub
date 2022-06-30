import { NgModule } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { PrivateComponent } from './private.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavouritesComponent } from './components/favourites/favourites.component';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PrivateComponent,
    ReaderComponent,
    ProfileComponent,
    FavouritesComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    MatGridListModule,
    PrivateRoutingModule,
    MatCardModule,
    LazyLoadImageModule
  ]
})
export class PrivateModule { }
