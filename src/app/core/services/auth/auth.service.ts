import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  checkToken(token: string) {}

  logOut(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('expiresIn')
  }

  saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('token', token)
    localStorage.setItem('expiresIn', expiresIn)
  }

  getUserByToken(token: string | null) {
    if (token !== null) {
      return this.http.get(`https://bitcorank.herokuapp.com/tokenUser/${token}`)
    }
    return this.http.get(`https://bitcorank.herokuapp.com/tokenUser/false`)
  }
}
