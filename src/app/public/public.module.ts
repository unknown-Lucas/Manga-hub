//Angular Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { PublicRoutingModule } from './public-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoreModule } from '../core/core.module'

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'

//Components
import { PublicComponent } from './public.component'
import { RegisterComponent } from './components/register/register.component'
import { LoginComponent } from './components/login/login.component'
import { MainComponent } from './components/main/main.component'
import { SearcherComponent } from './components/searcher/searcher.component'
import { SearchPipe } from './pipes/search.pipe';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component'

@NgModule({
  declarations: [
    PublicComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    SearcherComponent,
    SearchPipe,
    BottomSheetComponent
  ],
  imports: [
    PublicRoutingModule,
    CoreModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class PublicModule {}
