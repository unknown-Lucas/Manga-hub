import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { Router } from '@angular/router'
import { faHouse , faStar , faUser , faRightFromBracket, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-top-var',
  templateUrl: './top-var.component.html',
  styleUrls: ['./top-var.component.css']
})
export class TopVarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  )

  //Icons
  Inicio = faHouse;
  Favoritos = faStar;
  Perfil = faUser;
  Registrar = faUserAstronaut
  logout = faRightFromBracket;

  //auth Service to component
  AuthService = this.authService

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, private authService: AuthService) {}
}
