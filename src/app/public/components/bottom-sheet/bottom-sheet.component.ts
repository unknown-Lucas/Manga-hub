import { Component, Inject, OnInit } from '@angular/core'
import { MangaService } from 'src/app/core/services/manga/manga.service'
import { MatBottomSheet, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { Manga } from '../../classes/Mangas'
import { AuthService } from 'src/app/core/services/auth/auth.service'
import { UsersService } from '../../services/users.service'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {
  Manga: Manga
  chapters: any[]
  faHeart = faHeart
  faHeartBroken = faHeartBroken
  private user: any
  isFavorite: Boolean = false
  load: Boolean = false
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public manga: any,
    private http: HttpClient,
    private router: Router,
    private sheet: MatBottomSheet,
    private mangaService: MangaService,
    private authService: AuthService,
    private userService: UsersService
  ) {}

  async ngOnInit() {
    let token = localStorage.getItem('token')
    this.Manga = this.manga.manga

    await forkJoin([
      this.mangaService.getChapters(this.Manga.id),
      this.authService.getUserByToken(token)
    ]).subscribe((results: any) => {
      this.chapters = results[0].chapter.flat()
      this.chapters.sort((a, b) => {
        return a.chapter - b.chapter
      })
      this.user=results[1]
      if (this.user) {
        console.log(this.user)
        this.user.favs.forEach((mangaID: number) => {
          console.log(mangaID)
          if (mangaID == this.Manga.id) {
            this.isFavorite = true
          }
        })
        return (this.load = true)
      }
      return null
    })
  }

   favourite = async() => {
    if (!this.isFavorite) {
      this.isFavorite = !this.isFavorite
      return await this.userService.addFavourite(this.Manga.id, this.user._id).subscribe((res) =>
        console.log(res)
      )
    } else {
      this.isFavorite = !this.isFavorite
      return await this.userService.removeFavourite(this.Manga.id, this.user._id).subscribe(
        (res) => console.log(res)
      )
    }
  }

  read = async (chapter: string) => {
    await this.mangaService.read(chapter, this.Manga.apiID)
    this.sheet.dismiss()
  }
}
