//Angular Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PublicRoutingModule } from './public-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//Angular Material
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'

//Components
import { PublicComponent } from './public.component'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'
import { TopVarComponent } from './components/top-var/top-var.component'
import { MainComponent } from './components/main/main.component'
import { SearcherComponent } from './components/searcher/searcher.component'
import { SearchPipe } from './pipes/search.pipe';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component'

@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    LoginComponent,
    TopVarComponent,
    MainComponent,
    SearcherComponent,
    SearchPipe,
    BottomSheetComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[TopVarComponent]
})
export class PublicModule {}
