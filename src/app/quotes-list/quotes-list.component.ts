import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  title = 'Quotes List'
  constructor() { }

  ngOnInit(): void {
  }

}
