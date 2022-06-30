import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { ActivatedRoute } from '@angular/router'
import { MangaService } from 'src/app/core/services/manga/manga.service'
import { Manga } from 'src/app/public/classes/Mangas'
import { BottomSheetComponent } from 'src/app/public/components/bottom-sheet/bottom-sheet.component'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  images: any[] = []
  load: boolean = false
  loader: string =
    'https://res.cloudinary.com/practicaldev/image/fetch/s--huFQ3nbp--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gqmymopg8bignlcfhvcx.gif'

  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet,
    private mangaService: MangaService
  ) {}

  async ngOnInit() {
    let MangaID = this._route.snapshot.paramMap.get('MangaID')
    let chapterID = this._route.snapshot.paramMap.get('chapterID')
    this.mangaService.readChapter(MangaID, chapterID).subscribe((res: any) => {
      this.images = res
      this.load = true
    })
  }

  chapterlist = async () => {
    let MangaID = this._route.snapshot.paramMap.get('MangaID')

    this.mangaService.ActualManga(MangaID).subscribe((res: any) => {
      const manga: Manga = new Manga(
        res.Datos,
        res.Personal,
        res.Tags,
        res.tipo,
        res.apiID,
        res._id
      )
      this.bottomSheet.open(BottomSheetComponent, {
        data: { manga }
      })
    })
  }
}
