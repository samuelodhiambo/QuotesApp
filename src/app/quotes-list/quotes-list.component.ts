import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

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

  quotes: Quotes[] = [
    {id: 1, author: 'Edward kevin', quote: 'This is quote number one', user: 'Ian', upvote: 0, downvote: 0},
    {id: 2, author: 'john kevin', quote: 'This is quote number two', user: 'leon', upvote: 0, downvote: 0},
    {id: 3, author: 'Doe kevin', quote: 'This is quote number three', user: 'dan', upvote: 0, downvote: 0},
    {id: 4, author: 'Gerald kevin', quote: 'This is quote number four', user: 'fello', upvote: 0, downvote: 0},
  ];

}
