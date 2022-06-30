import { NgModule } from '@angular/core';
import { PublicModule } from '../public/public.module';
import { PrivateRoutingModule } from './private-routing.module';
import { CoreModule } from '../core/core.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { PrivateComponent } from './private.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    PrivateComponent,
    ReaderComponent,
    ProfileComponent,
    FavouritesComponent,
  ],
  imports: [
    PublicModule,
    CoreModule,
    MatGridListModule,
    PrivateRoutingModule,
    MatCardModule,
  ]
})
export class PrivateModule { }
