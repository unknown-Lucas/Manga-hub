import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReaderComponent } from './components/reader/reader.component'
import { AuthGuard } from '../core/guards/auth.guard'
import { ProfileComponent } from './components/profile/profile.component'
import { FavouritesComponent } from './components/favourites/favourites.component'
import { OnDevComponent } from '../core/components/on-dev/on-dev.component'

const routes: Routes = [
  {
    path: 'reader/:MangaID/:chapterID',
    component: ReaderComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile/favorites',
    component: OnDevComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
