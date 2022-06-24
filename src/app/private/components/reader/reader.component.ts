import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { ActivatedRoute } from '@angular/router'
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

  constructor(
    private _route: ActivatedRoute,
    private http: HttpClient,
    private bottomSheet: MatBottomSheet
  ) {}

  async ngOnInit() {
    let MangaID = this._route.snapshot.paramMap.get('MangaID')
    let chapterID = this._route.snapshot.paramMap.get('chapterID')
    await this.http
      .get(`https://bitcorank.herokuapp.com/chapters/${MangaID}/${chapterID}`)
      .subscribe((res: any) => {
        this.images = res
        this.load = true
      })
  }

  chapterlist = async () => {
    let MangaID = this._route.snapshot.paramMap.get('MangaID')
    await this.http
      .get(`https://bitcorank.herokuapp.com/ActualManga/${MangaID}`)
      .subscribe((res: any) => {
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
