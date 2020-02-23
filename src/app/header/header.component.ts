import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  @Output() keywordChange = new EventEmitter<string>();

  keyword = '';

  highlightTitle = false;
  fontSize = 24;

  ngOnInit(): void {
  }

  search($event) {
    this.keywordChange.emit(this.keyword);
    // console.log($event);

    // this.highlightTitle = !this.highlightTitle;
    // ++this.fontSize;
  }

}
