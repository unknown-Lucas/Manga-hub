import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map, shareReplay } from 'rxjs/operators'
import { Router } from '@angular/router'

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

  logOut() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
    this.route.navigate(['login'])
  }

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) {}
}
