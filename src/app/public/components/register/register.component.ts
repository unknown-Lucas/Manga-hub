import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: UntypedFormGroup
  error: string[] = []
  private token: string = ''
  private expiresIn: string = ''

  constructor(private http: HttpClient, private fb: UntypedFormBuilder, private router: Router, private service:UsersService) {
    this.userForm = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      confirmar: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {}

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('token', token)
    localStorage.setItem('expiresIn', expiresIn)
    this.token = token
    this.expiresIn = expiresIn
  }
  addUser() {
    if (this.userForm.value.contraseña !== this.userForm.value.confirmar) {
      if (!this.error.includes('Las contraseñas deben coincidir'))
        this.error.push('Las contraseñas deben coincidir')
    } else {
      this.userForm.value.tipo = 'user'
      this.userForm.value.favs = []
      this.error = []
      this.service.register(this.userForm).subscribe({
        next: (res: any) => {
          this.saveToken(res.token, res.expiresIn)
          this.router.navigate(['profile'])
        },
        error: (e) => {
          if (!this.error.includes(e.error.text)) this.error.push(e.error.text)
        }
      })
    }
  }
}
