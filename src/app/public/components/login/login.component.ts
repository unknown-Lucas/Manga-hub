import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: UntypedFormGroup
  error: string[] = []
  private token: string = ''
  private expiresIn: string = ''

  constructor(
    private http: HttpClient,
    private fb: UntypedFormBuilder,
    private router: Router,
    private userService: UsersService,
    private authService: AuthService
  ) {
    this.userForm = this.fb.group({
      usuario: [''],
      contraseña: ['']
    })
  }

  logIn = async () => {
    await this.userService.logIn(this.userForm).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token, res.expiresIn)
        this.router.navigate(['main'])
      },
      error: (e: any) => {
        this.error = []
        if (!this.error.includes(e.error.text)) this.error.push(e.error.text)
      }
    })
  }

  ngOnInit() {
    let token = localStorage.getItem('token')
    if (token) {
      return this.router.navigate(['main'])
    }
    return null
  }
}
