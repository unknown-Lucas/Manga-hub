import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Manga } from 'src/app/public/classes/Mangas'
import { __await } from 'tslib'

@Injectable({
  providedIn: 'root'
})

export class MangaService {
  constructor(private http: HttpClient, private router: Router) {}

  getMangas() {
    return this.http.get<Manga[]>('https://bitcorank.herokuapp.com/mangas')
  }

  getChapters(id:number) {
    return this.http.get(`https://bitcorank.herokuapp.com/chapters/${id}`)
  }

  read = (chapter: string, apiID: string): void => {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigateByUrl(`/reader/${apiID}/${chapter}`))
  }

}
