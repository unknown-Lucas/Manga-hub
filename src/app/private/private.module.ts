import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicModule } from '../public/public.module';


@NgModule({
  declarations: [
    PrivateComponent,
    ReaderComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
