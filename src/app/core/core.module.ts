import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { RouterModule } from '@angular/router'
import { MatButtonModule } from '@angular/material/button'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { OnDevComponent } from './components/on-dev/on-dev.component'
import { TopVarComponent } from './components/top-var/top-var.component'
import { LazyLoadImageModule } from 'ng-lazyload-image'

@NgModule({
  declarations: [OnDevComponent, TopVarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LazyLoadImageModule,
    HttpClientModule,
  ],
  exports: [TopVarComponent, MatIconModule, LazyLoadImageModule,CommonModule,HttpClientModule,MatButtonModule]
})
export class CoreModule {}
