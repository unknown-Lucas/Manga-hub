import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  value: any;

  ngOnInit() {
    this.search.valueChanges
      .pipe(debounceTime(250))
      .subscribe((value: any) => this.searchEmitter.emit(value));
  }

  search = new UntypedFormControl('');

  @Output('search') searchEmitter = new EventEmitter<string>();
}
