import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Manga } from '../../classes/Mangas'
import { MangaService } from 'src/app/core/services/manga/manga.service'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  trueMangaArr: Manga[] = []
  filterValue: string = ''
  load: boolean = false
  description = false
  loader: string = "https://res.cloudinary.com/practicaldev/image/fetch/s--huFQ3nbp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gqmymopg8bignlcfhvcx.gif"

  constructor(
    private http: HttpClient,
    private mangaService: MangaService,
    private bottomSheet : MatBottomSheet
  ) {}

  ngOnInit() {
    this.mangaService.getMangas().subscribe((res: any) => {
      res.forEach((manga: any) => {
        const object: Manga = new Manga(
          manga.Datos,
          manga.Personal,
          manga.Tags,
          manga.tipo,
          manga.apiID,
          manga._id
        )
        this.trueMangaArr.push(object)
        this.load = true
      })
    })
  }

  showManga(manga: Manga): void {
    this.bottomSheet.open(BottomSheetComponent, {
      data: { manga } ,panelClass: 'container'
    });
  }

  handleSearch(value: string) {
    this.filterValue = ''
    if (value) this.filterValue = value
  }
}
