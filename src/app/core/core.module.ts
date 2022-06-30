import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'

import { OnDevComponent } from './components/on-dev/on-dev.component'
import { TopVarComponent } from './components/top-var/top-var.component'
import { LazyLoadImageModule } from 'ng-lazyload-image'

@NgModule({
  declarations: [OnDevComponent, TopVarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [TopVarComponent, MatIconModule, LazyLoadImageModule,CommonModule]
})
export class CoreModule {}
