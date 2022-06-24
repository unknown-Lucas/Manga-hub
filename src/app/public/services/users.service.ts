import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Manga } from '../classes/Mangas'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private router: Router) {}

  logIn(userForm: UntypedFormGroup) {
    return this.http.post('https://bitcorank.herokuapp.com/login', userForm.value)
  }

  register(userForm: UntypedFormGroup) {
    return this.http.post('https://bitcorank.herokuapp.com/register', userForm.value)
  }

  addFavourite(Manga: number, user: any) {
    return  this.http
    .post('https://bitcorank.herokuapp.com/favourite/add', {
      mangaId: Manga,
      userID: user,
    })
  }

  removeFavourite(Manga: number, user: any) {
    return  this.http
          .post('https://bitcorank.herokuapp.com/favourite/remove', {
            mangaId: Manga,
            userID: user,
          })
  }
}
