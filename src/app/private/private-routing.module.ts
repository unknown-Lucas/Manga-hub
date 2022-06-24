import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReaderComponent } from './components/reader/reader.component'
import { AuthGuard } from '../core/guards/auth.guard'

const routes: Routes = [
  {
    path: 'reader/:MangaID/:chapterID',
    component: ReaderComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
